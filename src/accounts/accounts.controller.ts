import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('accounts')
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @ApiOperation({ summary: 'Create a new account' })
  @ApiBody({ type: CreateAccountDto })
  @ApiResponse({
    status: 201,
    description: 'The account has been successfully created.',
  })
  @Post()
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.accountsService.create(createAccountDto);
  }

  @ApiOperation({ summary: 'Get all accounts' })
  @ApiResponse({ status: 200, description: 'Return all accounts.' })
  @Get()
  findAll() {
    return this.accountsService.findAll();
  }

  @ApiOperation({ summary: 'Get an account by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the account with the given ID.',
  })
  @ApiResponse({ status: 404, description: 'Account not found.' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountsService.findOne(id);
  }

  @ApiOperation({ summary: 'Update an account by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the account' })
  @ApiBody({ type: UpdateAccountDto })
  @ApiResponse({
    status: 200,
    description: 'The account has been successfully updated.',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountsService.update(id, updateAccountDto);
  }

  @ApiOperation({ summary: 'Delete an account by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the account' })
  @ApiResponse({
    status: 200,
    description: 'The account has been successfully deleted.',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountsService.remove(id);
  }

  @ApiOperation({ summary: 'Inactivate an account by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the account' })
  @ApiResponse({
    status: 200,
    description: 'The account has been successfully inactivated.',
  })
  @Put(':id/inactivate')
  inactivate(@Param('id') id: string) {
    return this.accountsService.inactivate(id);
  }

  @ApiOperation({ summary: 'Activate an account by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the account' })
  @ApiResponse({
    status: 200,
    description: 'The account has been successfully activated.',
  })
  @Put(':id/activate')
  activate(@Param('id') id: string) {
    return this.accountsService.activate(id);
  }
}
