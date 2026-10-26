import bcrypt from "bcrypt";
import { PrismaClient, Role } from "@prisma/client";
import { locations } from "../data/locations";
import { menuItems } from "../data/menu";
import { promotions } from "../data/promotions";

const prisma = new PrismaClient();

async function main() {
  const branchRecords = [];
  for (const location of locations) {
    branchRecords.push(await prisma.branch.upsert({
      where: { slug: location.slug },
      update: {
        name: location.name, address: location.address, phone: location.phone,
        openingHours: { display: location.openingHours }, designVariant: location.designVariant,
        heroHeadline: location.headline, heroSubheadline: location.description, active: true
      },
      create: {
        slug: location.slug, name: location.name, address: location.address, phone: location.phone,
        openingHours: { display: location.openingHours }, designVariant: location.designVariant,
        heroHeadline: location.headline, heroSubheadline: location.description, active: true
      }
    }));
  }

  const menuRecords = [];
  for (const item of menuItems) {
    menuRecords.push(await prisma.menuItem.upsert({
      where: { slug: item.slug },
      update: { name: item.name, description: item.description, category: item.category, price: item.price.toFixed(2), image: item.image, featured: !!item.featured, bestseller: !!item.bestseller, spicy: !!item.spicy, active: true },
      create: { slug: item.slug, name: item.name, description: item.description, category: item.category, price: item.price.toFixed(2), image: item.image, featured: !!item.featured, bestseller: !!item.bestseller, spicy: !!item.spicy, active: true }
    }));
  }

  for (const branch of branchRecords) {
    for (const item of menuRecords) {
      await prisma.branchMenuItem.upsert({
        where: { branchId_menuItemId: { branchId: branch.id, menuItemId: item.id } },
        update: { available: true },
        create: { branchId: branch.id, menuItemId: item.id, available: true }
      });
    }
  }

  const now = new Date();
  const in90Days = new Date(now.getTime() + 90 * 86400000);
  for (const promo of promotions) {
    const existing = await prisma.promotion.findFirst({ where: { title: promo.title } });
    const record = existing ? await prisma.promotion.update({ where: { id: existing.id }, data: { description: promo.description, image: promo.image, startDate: now, endDate: in90Days, active: true } }) : await prisma.promotion.create({ data: { title: promo.title, description: promo.description, image: promo.image, startDate: now, endDate: in90Days, active: true } });
    for (const branch of branchRecords) {
      await prisma.promotionBranch.upsert({ where: { promotionId_branchId: { promotionId: record.id, branchId: branch.id } }, update: {}, create: { promotionId: record.id, branchId: branch.id } });
    }
  }

  const adminPassword = await bcrypt.hash("DripAdmin123!", 12);
  const managerPassword = await bcrypt.hash("DripManager123!", 12);
  const staffPassword = await bcrypt.hash("DripStaff123!", 12);

  const admin = await prisma.user.upsert({ where: { email: "admin@drip.local" }, update: { name: "Drip Admin", passwordHash: adminPassword, role: Role.ADMIN, isActive: true }, create: { name: "Drip Admin", email: "admin@drip.local", passwordHash: adminPassword, role: Role.ADMIN } });
  const manager = await prisma.user.upsert({ where: { email: "manager@drip.local" }, update: { name: "Kilimani Manager", passwordHash: managerPassword, role: Role.MANAGER, isActive: true }, create: { name: "Kilimani Manager", email: "manager@drip.local", passwordHash: managerPassword, role: Role.MANAGER } });
  const staff = await prisma.user.upsert({ where: { email: "staff@drip.local" }, update: { name: "Mombasa Road Staff", passwordHash: staffPassword, role: Role.STAFF, isActive: true }, create: { name: "Mombasa Road Staff", email: "staff@drip.local", passwordHash: staffPassword, role: Role.STAFF } });
  void admin;

  const kilimani = branchRecords.find((b) => b.slug === "kilimani")!;
  const mombasaRoad = branchRecords.find((b) => b.slug === "mombasa-road")!;
  await prisma.userBranch.upsert({ where: { userId_branchId: { userId: manager.id, branchId: kilimani.id } }, update: {}, create: { userId: manager.id, branchId: kilimani.id } });
  await prisma.userBranch.upsert({ where: { userId_branchId: { userId: staff.id, branchId: mombasaRoad.id } }, update: {}, create: { userId: staff.id, branchId: mombasaRoad.id } });

  console.log("Seed complete");
  console.log("Admin: admin@drip.local / DripAdmin123!");
  console.log("Manager: manager@drip.local / DripManager123!");
  console.log("Staff: staff@drip.local / DripStaff123!");
}

main().catch((error) => { console.error(error); process.exit(1); }).finally(async () => prisma.$disconnect());
