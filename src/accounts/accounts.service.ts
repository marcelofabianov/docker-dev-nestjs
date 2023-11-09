import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AccountsService {
  constructor(private prisma: PrismaService) {}

  async create(createAccountDto: CreateAccountDto) {
    const createdAccount = await this.prisma.account.create({
      data: createAccountDto,
    });

    return createdAccount;
  }

  async findAll() {
    return await this.prisma.account.findMany({ where: { deletedAt: null } });
  }

  async findOne(id: string) {
    const account = await this.prisma.account.findUnique({
      where: { id, deletedAt: null },
    });

    if (!account) {
      throw new NotFoundException(`Account with id ${id} not found`);
    }

    return account;
  }

  async update(id: string, updateAccountDto: UpdateAccountDto) {
    const updatedAccount = await this.prisma.account.update({
      where: { id },
      data: updateAccountDto,
    });

    return updatedAccount;
  }

  async remove(id: string) {
    const deletedAccount = await this.prisma.account.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    return deletedAccount;
  }

  async inactivate(id: string) {
    const inactivatedAccount = await this.prisma.account.update({
      where: { id },
      data: { inactivatedAt: new Date() },
    });

    return inactivatedAccount;
  }

  async activate(id: string) {
    const activatedAccount = await this.prisma.account.update({
      where: { id },
      data: { inactivatedAt: null },
    });

    return activatedAccount;
  }
}
