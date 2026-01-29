
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.10.0
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.10.0",
  engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.BrandScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  prefix: 'prefix'
};

exports.Prisma.TicketScalarFieldEnum = {
  id: 'id',
  ticketNumber: 'ticketNumber',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  status: 'status',
  priority: 'priority',
  cancellationReason: 'cancellationReason',
  customerId: 'customerId',
  customerName: 'customerName',
  customerPhone: 'customerPhone',
  contactMethod: 'contactMethod',
  addressStreet: 'addressStreet',
  addressColony: 'addressColony',
  addressZip: 'addressZip',
  addressCity: 'addressCity',
  propertyType: 'propertyType',
  brandId: 'brandId',
  categoryId: 'categoryId',
  model: 'model',
  serialNumber: 'serialNumber',
  issueDescription: 'issueDescription',
  triageData: 'triageData',
  technicianId: 'technicianId',
  laborCost: 'laborCost',
  partsCost: 'partsCost',
  totalCost: 'totalCost',
  invoiceUrl: 'invoiceUrl',
  signatureUrl: 'signatureUrl',
  technicianNotes: 'technicianNotes',
  isRepaired: 'isRepaired',
  invoiceName: 'invoiceName',
  invoiceTaxId: 'invoiceTaxId',
  invoiceEmail: 'invoiceEmail',
  invoiceAddress: 'invoiceAddress',
  includeIva: 'includeIva',
  appliedIvaPercentage: 'appliedIvaPercentage'
};

exports.Prisma.CustomerScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name',
  phone: 'phone',
  email: 'email',
  address: 'address',
  documentNumber: 'documentNumber'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  password: 'password',
  phone: 'phone',
  role: 'role'
};

exports.Prisma.PhotoScalarFieldEnum = {
  id: 'id',
  url: 'url',
  type: 'type',
  ticketId: 'ticketId'
};

exports.Prisma.SparePartScalarFieldEnum = {
  id: 'id',
  name: 'name',
  sku: 'sku',
  price: 'price',
  stock: 'stock'
};

exports.Prisma.CompanySettingsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  taxId: 'taxId',
  address: 'address',
  phone: 'phone',
  email: 'email',
  logoUrl: 'logoUrl',
  ivaPercentage: 'ivaPercentage',
  currencySymbol: 'currencySymbol',
  currencyCode: 'currencyCode',
  countryCode: 'countryCode',
  cloudinaryCloudName: 'cloudinaryCloudName',
  cloudinaryApiKey: 'cloudinaryApiKey',
  cloudinaryApiSecret: 'cloudinaryApiSecret',
  externalDbUrl: 'externalDbUrl',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Brand: 'Brand',
  Category: 'Category',
  Ticket: 'Ticket',
  Customer: 'Customer',
  User: 'User',
  Photo: 'Photo',
  SparePart: 'SparePart',
  CompanySettings: 'CompanySettings'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
