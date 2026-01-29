
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Brand
 * 
 */
export type Brand = $Result.DefaultSelection<Prisma.$BrandPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Photo
 * 
 */
export type Photo = $Result.DefaultSelection<Prisma.$PhotoPayload>
/**
 * Model SparePart
 * 
 */
export type SparePart = $Result.DefaultSelection<Prisma.$SparePartPayload>
/**
 * Model CompanySettings
 * 
 */
export type CompanySettings = $Result.DefaultSelection<Prisma.$CompanySettingsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Brands
 * const brands = await prisma.brand.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Brands
   * const brands = await prisma.brand.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.brand`: Exposes CRUD operations for the **Brand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brand.findMany()
    * ```
    */
  get brand(): Prisma.BrandDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.photo`: Exposes CRUD operations for the **Photo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photo.findMany()
    * ```
    */
  get photo(): Prisma.PhotoDelegate<ExtArgs>;

  /**
   * `prisma.sparePart`: Exposes CRUD operations for the **SparePart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpareParts
    * const spareParts = await prisma.sparePart.findMany()
    * ```
    */
  get sparePart(): Prisma.SparePartDelegate<ExtArgs>;

  /**
   * `prisma.companySettings`: Exposes CRUD operations for the **CompanySettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanySettings
    * const companySettings = await prisma.companySettings.findMany()
    * ```
    */
  get companySettings(): Prisma.CompanySettingsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.10.0
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Brand: 'Brand',
    Category: 'Category',
    Ticket: 'Ticket',
    Customer: 'Customer',
    User: 'User',
    Photo: 'Photo',
    SparePart: 'SparePart',
    CompanySettings: 'CompanySettings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'brand' | 'category' | 'ticket' | 'customer' | 'user' | 'photo' | 'sparePart' | 'companySettings'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Brand: {
        payload: Prisma.$BrandPayload<ExtArgs>
        fields: Prisma.BrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findFirst: {
            args: Prisma.BrandFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findMany: {
            args: Prisma.BrandFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          create: {
            args: Prisma.BrandCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          createMany: {
            args: Prisma.BrandCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BrandDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          update: {
            args: Prisma.BrandUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          deleteMany: {
            args: Prisma.BrandDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BrandUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BrandUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          aggregate: {
            args: Prisma.BrandAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBrand>
          }
          groupBy: {
            args: Prisma.BrandGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BrandGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandCountArgs<ExtArgs>,
            result: $Utils.Optional<BrandCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>,
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>,
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Photo: {
        payload: Prisma.$PhotoPayload<ExtArgs>
        fields: Prisma.PhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findFirst: {
            args: Prisma.PhotoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findMany: {
            args: Prisma.PhotoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          create: {
            args: Prisma.PhotoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          createMany: {
            args: Prisma.PhotoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PhotoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          update: {
            args: Prisma.PhotoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          deleteMany: {
            args: Prisma.PhotoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PhotoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          aggregate: {
            args: Prisma.PhotoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePhoto>
          }
          groupBy: {
            args: Prisma.PhotoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoCountArgs<ExtArgs>,
            result: $Utils.Optional<PhotoCountAggregateOutputType> | number
          }
        }
      }
      SparePart: {
        payload: Prisma.$SparePartPayload<ExtArgs>
        fields: Prisma.SparePartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SparePartFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SparePartFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload>
          }
          findFirst: {
            args: Prisma.SparePartFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SparePartFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload>
          }
          findMany: {
            args: Prisma.SparePartFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload>[]
          }
          create: {
            args: Prisma.SparePartCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload>
          }
          createMany: {
            args: Prisma.SparePartCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SparePartDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload>
          }
          update: {
            args: Prisma.SparePartUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload>
          }
          deleteMany: {
            args: Prisma.SparePartDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SparePartUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SparePartUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload>
          }
          aggregate: {
            args: Prisma.SparePartAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSparePart>
          }
          groupBy: {
            args: Prisma.SparePartGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SparePartGroupByOutputType>[]
          }
          count: {
            args: Prisma.SparePartCountArgs<ExtArgs>,
            result: $Utils.Optional<SparePartCountAggregateOutputType> | number
          }
        }
      }
      CompanySettings: {
        payload: Prisma.$CompanySettingsPayload<ExtArgs>
        fields: Prisma.CompanySettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanySettingsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanySettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanySettingsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanySettingsPayload>
          }
          findFirst: {
            args: Prisma.CompanySettingsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanySettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanySettingsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanySettingsPayload>
          }
          findMany: {
            args: Prisma.CompanySettingsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanySettingsPayload>[]
          }
          create: {
            args: Prisma.CompanySettingsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanySettingsPayload>
          }
          createMany: {
            args: Prisma.CompanySettingsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CompanySettingsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanySettingsPayload>
          }
          update: {
            args: Prisma.CompanySettingsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanySettingsPayload>
          }
          deleteMany: {
            args: Prisma.CompanySettingsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CompanySettingsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CompanySettingsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanySettingsPayload>
          }
          aggregate: {
            args: Prisma.CompanySettingsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCompanySettings>
          }
          groupBy: {
            args: Prisma.CompanySettingsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CompanySettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanySettingsCountArgs<ExtArgs>,
            result: $Utils.Optional<CompanySettingsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BrandCountOutputType
   */

  export type BrandCountOutputType = {
    tickets: number
  }

  export type BrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | BrandCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCountOutputType
     */
    select?: BrandCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }



  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    tickets: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | CategoryCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }



  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    photos: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | TicketCountOutputTypeCountPhotosArgs
  }

  // Custom InputTypes

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
  }



  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    tickets: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | CustomerCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tickets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | UserCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Brand
   */

  export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null
    _avg: BrandAvgAggregateOutputType | null
    _sum: BrandSumAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  export type BrandAvgAggregateOutputType = {
    id: number | null
  }

  export type BrandSumAggregateOutputType = {
    id: number | null
  }

  export type BrandMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type BrandMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type BrandCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type BrandAvgAggregateInputType = {
    id?: true
  }

  export type BrandSumAggregateInputType = {
    id?: true
  }

  export type BrandMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type BrandMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type BrandCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type BrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brand to aggregate.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrandAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrandSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType
  }

  export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
        [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrand[P]>
      : GetScalarType<T[P], AggregateBrand[P]>
  }




  export type BrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithAggregationInput | BrandOrderByWithAggregationInput[]
    by: BrandScalarFieldEnum[] | BrandScalarFieldEnum
    having?: BrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCountAggregateInputType | true
    _avg?: BrandAvgAggregateInputType
    _sum?: BrandSumAggregateInputType
    _min?: BrandMinAggregateInputType
    _max?: BrandMaxAggregateInputType
  }

  export type BrandGroupByOutputType = {
    id: number
    name: string
    _count: BrandCountAggregateOutputType | null
    _avg: BrandAvgAggregateOutputType | null
    _sum: BrandSumAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandGroupByOutputType[P]>
            : GetScalarType<T[P], BrandGroupByOutputType[P]>
        }
      >
    >


  export type BrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tickets?: boolean | Brand$ticketsArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type BrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | Brand$ticketsArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brand"
    objects: {
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["brand"]>
    composites: {}
  }


  type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = $Result.GetResult<Prisma.$BrandPayload, S>

  type BrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BrandCountAggregateInputType | true
    }

  export interface BrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brand'], meta: { name: 'Brand' } }
    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BrandFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Brand that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BrandFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandFindFirstArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Brand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandWithIdOnly = await prisma.brand.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BrandFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     * 
    **/
    create<T extends BrandCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BrandCreateArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Brands.
     *     @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     *     @example
     *     // Create many Brands
     *     const brand = await prisma.brand.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BrandCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     * 
    **/
    delete<T extends BrandDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BrandDeleteArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BrandUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BrandUpdateArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BrandDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BrandUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
    **/
    upsert<T extends BrandUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BrandUpsertArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(
      args?: Subset<T, BrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrandAggregateArgs>(args: Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>

    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandGroupByArgs['orderBy'] }
        : { orderBy?: BrandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brand model
   */
  readonly fields: BrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tickets<T extends Brand$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Brand$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Brand model
   */ 
  interface BrandFieldRefs {
    readonly id: FieldRef<"Brand", 'Int'>
    readonly name: FieldRef<"Brand", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Brand findUnique
   */
  export type BrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }


  /**
   * Brand findUniqueOrThrow
   */
  export type BrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }


  /**
   * Brand findFirst
   */
  export type BrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }


  /**
   * Brand findFirstOrThrow
   */
  export type BrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }


  /**
   * Brand findMany
   */
  export type BrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }


  /**
   * Brand create
   */
  export type BrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to create a Brand.
     */
    data: XOR<BrandCreateInput, BrandUncheckedCreateInput>
  }


  /**
   * Brand createMany
   */
  export type BrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Brand update
   */
  export type BrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to update a Brand.
     */
    data: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
    /**
     * Choose, which Brand to update.
     */
    where: BrandWhereUniqueInput
  }


  /**
   * Brand updateMany
   */
  export type BrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
  }


  /**
   * Brand upsert
   */
  export type BrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The filter to search for the Brand to update in case it exists.
     */
    where: BrandWhereUniqueInput
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     */
    create: XOR<BrandCreateInput, BrandUncheckedCreateInput>
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
  }


  /**
   * Brand delete
   */
  export type BrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter which Brand to delete.
     */
    where: BrandWhereUniqueInput
  }


  /**
   * Brand deleteMany
   */
  export type BrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandWhereInput
  }


  /**
   * Brand.tickets
   */
  export type Brand$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }


  /**
   * Brand without action
   */
  export type BrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
  }



  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    prefix: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    prefix: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    prefix: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    prefix?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    prefix?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    prefix?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    slug: string
    prefix: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    prefix?: boolean
    tickets?: boolean | Category$ticketsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    prefix?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | Category$ticketsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      prefix: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tickets<T extends Category$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Category$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly prefix: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.tickets
   */
  export type Category$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }


  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    ticketNumber: number | null
    brandId: number | null
    categoryId: number | null
    laborCost: number | null
    partsCost: number | null
    totalCost: number | null
    appliedIvaPercentage: number | null
  }

  export type TicketSumAggregateOutputType = {
    ticketNumber: number | null
    brandId: number | null
    categoryId: number | null
    laborCost: number | null
    partsCost: number | null
    totalCost: number | null
    appliedIvaPercentage: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: string | null
    ticketNumber: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
    priority: string | null
    cancellationReason: string | null
    customerId: string | null
    customerName: string | null
    customerPhone: string | null
    contactMethod: string | null
    addressStreet: string | null
    addressColony: string | null
    addressZip: string | null
    addressCity: string | null
    propertyType: string | null
    brandId: number | null
    categoryId: number | null
    model: string | null
    serialNumber: string | null
    issueDescription: string | null
    triageData: string | null
    technicianId: string | null
    laborCost: number | null
    partsCost: number | null
    totalCost: number | null
    invoiceUrl: string | null
    signatureUrl: string | null
    technicianNotes: string | null
    isRepaired: boolean | null
    invoiceName: string | null
    invoiceTaxId: string | null
    invoiceEmail: string | null
    invoiceAddress: string | null
    includeIva: boolean | null
    appliedIvaPercentage: number | null
  }

  export type TicketMaxAggregateOutputType = {
    id: string | null
    ticketNumber: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
    priority: string | null
    cancellationReason: string | null
    customerId: string | null
    customerName: string | null
    customerPhone: string | null
    contactMethod: string | null
    addressStreet: string | null
    addressColony: string | null
    addressZip: string | null
    addressCity: string | null
    propertyType: string | null
    brandId: number | null
    categoryId: number | null
    model: string | null
    serialNumber: string | null
    issueDescription: string | null
    triageData: string | null
    technicianId: string | null
    laborCost: number | null
    partsCost: number | null
    totalCost: number | null
    invoiceUrl: string | null
    signatureUrl: string | null
    technicianNotes: string | null
    isRepaired: boolean | null
    invoiceName: string | null
    invoiceTaxId: string | null
    invoiceEmail: string | null
    invoiceAddress: string | null
    includeIva: boolean | null
    appliedIvaPercentage: number | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    ticketNumber: number
    createdAt: number
    updatedAt: number
    status: number
    priority: number
    cancellationReason: number
    customerId: number
    customerName: number
    customerPhone: number
    contactMethod: number
    addressStreet: number
    addressColony: number
    addressZip: number
    addressCity: number
    propertyType: number
    brandId: number
    categoryId: number
    model: number
    serialNumber: number
    issueDescription: number
    triageData: number
    technicianId: number
    laborCost: number
    partsCost: number
    totalCost: number
    invoiceUrl: number
    signatureUrl: number
    technicianNotes: number
    isRepaired: number
    invoiceName: number
    invoiceTaxId: number
    invoiceEmail: number
    invoiceAddress: number
    includeIva: number
    appliedIvaPercentage: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    ticketNumber?: true
    brandId?: true
    categoryId?: true
    laborCost?: true
    partsCost?: true
    totalCost?: true
    appliedIvaPercentage?: true
  }

  export type TicketSumAggregateInputType = {
    ticketNumber?: true
    brandId?: true
    categoryId?: true
    laborCost?: true
    partsCost?: true
    totalCost?: true
    appliedIvaPercentage?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    ticketNumber?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    priority?: true
    cancellationReason?: true
    customerId?: true
    customerName?: true
    customerPhone?: true
    contactMethod?: true
    addressStreet?: true
    addressColony?: true
    addressZip?: true
    addressCity?: true
    propertyType?: true
    brandId?: true
    categoryId?: true
    model?: true
    serialNumber?: true
    issueDescription?: true
    triageData?: true
    technicianId?: true
    laborCost?: true
    partsCost?: true
    totalCost?: true
    invoiceUrl?: true
    signatureUrl?: true
    technicianNotes?: true
    isRepaired?: true
    invoiceName?: true
    invoiceTaxId?: true
    invoiceEmail?: true
    invoiceAddress?: true
    includeIva?: true
    appliedIvaPercentage?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    ticketNumber?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    priority?: true
    cancellationReason?: true
    customerId?: true
    customerName?: true
    customerPhone?: true
    contactMethod?: true
    addressStreet?: true
    addressColony?: true
    addressZip?: true
    addressCity?: true
    propertyType?: true
    brandId?: true
    categoryId?: true
    model?: true
    serialNumber?: true
    issueDescription?: true
    triageData?: true
    technicianId?: true
    laborCost?: true
    partsCost?: true
    totalCost?: true
    invoiceUrl?: true
    signatureUrl?: true
    technicianNotes?: true
    isRepaired?: true
    invoiceName?: true
    invoiceTaxId?: true
    invoiceEmail?: true
    invoiceAddress?: true
    includeIva?: true
    appliedIvaPercentage?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    ticketNumber?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    priority?: true
    cancellationReason?: true
    customerId?: true
    customerName?: true
    customerPhone?: true
    contactMethod?: true
    addressStreet?: true
    addressColony?: true
    addressZip?: true
    addressCity?: true
    propertyType?: true
    brandId?: true
    categoryId?: true
    model?: true
    serialNumber?: true
    issueDescription?: true
    triageData?: true
    technicianId?: true
    laborCost?: true
    partsCost?: true
    totalCost?: true
    invoiceUrl?: true
    signatureUrl?: true
    technicianNotes?: true
    isRepaired?: true
    invoiceName?: true
    invoiceTaxId?: true
    invoiceEmail?: true
    invoiceAddress?: true
    includeIva?: true
    appliedIvaPercentage?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: string
    ticketNumber: number
    createdAt: Date
    updatedAt: Date
    status: string
    priority: string
    cancellationReason: string | null
    customerId: string | null
    customerName: string
    customerPhone: string
    contactMethod: string | null
    addressStreet: string
    addressColony: string
    addressZip: string
    addressCity: string
    propertyType: string
    brandId: number
    categoryId: number
    model: string | null
    serialNumber: string | null
    issueDescription: string
    triageData: string
    technicianId: string | null
    laborCost: number
    partsCost: number
    totalCost: number
    invoiceUrl: string | null
    signatureUrl: string | null
    technicianNotes: string | null
    isRepaired: boolean
    invoiceName: string | null
    invoiceTaxId: string | null
    invoiceEmail: string | null
    invoiceAddress: string | null
    includeIva: boolean
    appliedIvaPercentage: number
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    priority?: boolean
    cancellationReason?: boolean
    customerId?: boolean
    customerName?: boolean
    customerPhone?: boolean
    contactMethod?: boolean
    addressStreet?: boolean
    addressColony?: boolean
    addressZip?: boolean
    addressCity?: boolean
    propertyType?: boolean
    brandId?: boolean
    categoryId?: boolean
    model?: boolean
    serialNumber?: boolean
    issueDescription?: boolean
    triageData?: boolean
    technicianId?: boolean
    laborCost?: boolean
    partsCost?: boolean
    totalCost?: boolean
    invoiceUrl?: boolean
    signatureUrl?: boolean
    technicianNotes?: boolean
    isRepaired?: boolean
    invoiceName?: boolean
    invoiceTaxId?: boolean
    invoiceEmail?: boolean
    invoiceAddress?: boolean
    includeIva?: boolean
    appliedIvaPercentage?: boolean
    customer?: boolean | Ticket$customerArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    technician?: boolean | Ticket$technicianArgs<ExtArgs>
    photos?: boolean | Ticket$photosArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    ticketNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    priority?: boolean
    cancellationReason?: boolean
    customerId?: boolean
    customerName?: boolean
    customerPhone?: boolean
    contactMethod?: boolean
    addressStreet?: boolean
    addressColony?: boolean
    addressZip?: boolean
    addressCity?: boolean
    propertyType?: boolean
    brandId?: boolean
    categoryId?: boolean
    model?: boolean
    serialNumber?: boolean
    issueDescription?: boolean
    triageData?: boolean
    technicianId?: boolean
    laborCost?: boolean
    partsCost?: boolean
    totalCost?: boolean
    invoiceUrl?: boolean
    signatureUrl?: boolean
    technicianNotes?: boolean
    isRepaired?: boolean
    invoiceName?: boolean
    invoiceTaxId?: boolean
    invoiceEmail?: boolean
    invoiceAddress?: boolean
    includeIva?: boolean
    appliedIvaPercentage?: boolean
  }

  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Ticket$customerArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    technician?: boolean | Ticket$technicianArgs<ExtArgs>
    photos?: boolean | Ticket$photosArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs> | null
      brand: Prisma.$BrandPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      technician: Prisma.$UserPayload<ExtArgs> | null
      photos: Prisma.$PhotoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketNumber: number
      createdAt: Date
      updatedAt: Date
      status: string
      priority: string
      cancellationReason: string | null
      customerId: string | null
      customerName: string
      customerPhone: string
      contactMethod: string | null
      addressStreet: string
      addressColony: string
      addressZip: string
      addressCity: string
      propertyType: string
      brandId: number
      categoryId: number
      model: string | null
      serialNumber: string | null
      issueDescription: string
      triageData: string
      technicianId: string | null
      laborCost: number
      partsCost: number
      totalCost: number
      invoiceUrl: string | null
      signatureUrl: string | null
      technicianNotes: string | null
      isRepaired: boolean
      invoiceName: string | null
      invoiceTaxId: string | null
      invoiceEmail: string | null
      invoiceAddress: string | null
      includeIva: boolean
      appliedIvaPercentage: number
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }


  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TicketFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ticket that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TicketFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TicketFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
    **/
    create<T extends TicketCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TicketCreateArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tickets.
     *     @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     *     @example
     *     // Create many Tickets
     *     const ticket = await prisma.ticket.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TicketCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
    **/
    delete<T extends TicketDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TicketUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TicketDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TicketUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
    **/
    upsert<T extends TicketUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    customer<T extends Ticket$customerArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    brand<T extends BrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandDefaultArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    technician<T extends Ticket$technicianArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$technicianArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    photos<T extends Ticket$photosArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Ticket model
   */ 
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'String'>
    readonly ticketNumber: FieldRef<"Ticket", 'Int'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly updatedAt: FieldRef<"Ticket", 'DateTime'>
    readonly status: FieldRef<"Ticket", 'String'>
    readonly priority: FieldRef<"Ticket", 'String'>
    readonly cancellationReason: FieldRef<"Ticket", 'String'>
    readonly customerId: FieldRef<"Ticket", 'String'>
    readonly customerName: FieldRef<"Ticket", 'String'>
    readonly customerPhone: FieldRef<"Ticket", 'String'>
    readonly contactMethod: FieldRef<"Ticket", 'String'>
    readonly addressStreet: FieldRef<"Ticket", 'String'>
    readonly addressColony: FieldRef<"Ticket", 'String'>
    readonly addressZip: FieldRef<"Ticket", 'String'>
    readonly addressCity: FieldRef<"Ticket", 'String'>
    readonly propertyType: FieldRef<"Ticket", 'String'>
    readonly brandId: FieldRef<"Ticket", 'Int'>
    readonly categoryId: FieldRef<"Ticket", 'Int'>
    readonly model: FieldRef<"Ticket", 'String'>
    readonly serialNumber: FieldRef<"Ticket", 'String'>
    readonly issueDescription: FieldRef<"Ticket", 'String'>
    readonly triageData: FieldRef<"Ticket", 'String'>
    readonly technicianId: FieldRef<"Ticket", 'String'>
    readonly laborCost: FieldRef<"Ticket", 'Float'>
    readonly partsCost: FieldRef<"Ticket", 'Float'>
    readonly totalCost: FieldRef<"Ticket", 'Float'>
    readonly invoiceUrl: FieldRef<"Ticket", 'String'>
    readonly signatureUrl: FieldRef<"Ticket", 'String'>
    readonly technicianNotes: FieldRef<"Ticket", 'String'>
    readonly isRepaired: FieldRef<"Ticket", 'Boolean'>
    readonly invoiceName: FieldRef<"Ticket", 'String'>
    readonly invoiceTaxId: FieldRef<"Ticket", 'String'>
    readonly invoiceEmail: FieldRef<"Ticket", 'String'>
    readonly invoiceAddress: FieldRef<"Ticket", 'String'>
    readonly includeIva: FieldRef<"Ticket", 'Boolean'>
    readonly appliedIvaPercentage: FieldRef<"Ticket", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }


  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }


  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }


  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }


  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }


  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }


  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }


  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
  }


  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }


  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }


  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
  }


  /**
   * Ticket.customer
   */
  export type Ticket$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }


  /**
   * Ticket.technician
   */
  export type Ticket$technicianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Ticket.photos
   */
  export type Ticket$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    cursor?: PhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }


  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
  }



  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    phone: string | null
    email: string | null
    address: string | null
    documentNumber: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    phone: string | null
    email: string | null
    address: string | null
    documentNumber: string | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    phone: number
    email: number
    address: number
    documentNumber: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    documentNumber?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    documentNumber?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    documentNumber?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    phone: string
    email: string | null
    address: string | null
    documentNumber: string | null
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    documentNumber?: boolean
    tickets?: boolean | Customer$ticketsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    documentNumber?: boolean
  }

  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | Customer$ticketsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      phone: string
      email: string | null
      address: string | null
      documentNumber: string | null
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }


  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CustomerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
    **/
    create<T extends CustomerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Customers.
     *     @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customer = await prisma.customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CustomerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
    **/
    delete<T extends CustomerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
    **/
    upsert<T extends CustomerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tickets<T extends Customer$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly documentNumber: FieldRef<"Customer", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }


  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }


  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }


  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }


  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }


  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }


  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }


  /**
   * Customer.tickets
   */
  export type Customer$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }


  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    phone: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    phone: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    phone: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    phone?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    phone?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    phone?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    password: string | null
    phone: string | null
    role: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      password: string | null
      phone: string | null
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tickets<T extends User$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, User$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.tickets
   */
  export type User$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Photo
   */

  export type AggregatePhoto = {
    _count: PhotoCountAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  export type PhotoMinAggregateOutputType = {
    id: string | null
    url: string | null
    type: string | null
    ticketId: string | null
  }

  export type PhotoMaxAggregateOutputType = {
    id: string | null
    url: string | null
    type: string | null
    ticketId: string | null
  }

  export type PhotoCountAggregateOutputType = {
    id: number
    url: number
    type: number
    ticketId: number
    _all: number
  }


  export type PhotoMinAggregateInputType = {
    id?: true
    url?: true
    type?: true
    ticketId?: true
  }

  export type PhotoMaxAggregateInputType = {
    id?: true
    url?: true
    type?: true
    ticketId?: true
  }

  export type PhotoCountAggregateInputType = {
    id?: true
    url?: true
    type?: true
    ticketId?: true
    _all?: true
  }

  export type PhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photo to aggregate.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Photos
    **/
    _count?: true | PhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoMaxAggregateInputType
  }

  export type GetPhotoAggregateType<T extends PhotoAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoto[P]>
      : GetScalarType<T[P], AggregatePhoto[P]>
  }




  export type PhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithAggregationInput | PhotoOrderByWithAggregationInput[]
    by: PhotoScalarFieldEnum[] | PhotoScalarFieldEnum
    having?: PhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoCountAggregateInputType | true
    _min?: PhotoMinAggregateInputType
    _max?: PhotoMaxAggregateInputType
  }

  export type PhotoGroupByOutputType = {
    id: string
    url: string
    type: string
    ticketId: string
    _count: PhotoCountAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  type GetPhotoGroupByPayload<T extends PhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoGroupByOutputType[P]>
        }
      >
    >


  export type PhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    ticketId?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectScalar = {
    id?: boolean
    url?: boolean
    type?: boolean
    ticketId?: boolean
  }

  export type PhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }


  export type $PhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Photo"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      type: string
      ticketId: string
    }, ExtArgs["result"]["photo"]>
    composites: {}
  }


  type PhotoGetPayload<S extends boolean | null | undefined | PhotoDefaultArgs> = $Result.GetResult<Prisma.$PhotoPayload, S>

  type PhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PhotoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PhotoCountAggregateInputType | true
    }

  export interface PhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Photo'], meta: { name: 'Photo' } }
    /**
     * Find zero or one Photo that matches the filter.
     * @param {PhotoFindUniqueArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PhotoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoFindUniqueArgs<ExtArgs>>
    ): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Photo that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PhotoFindUniqueOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PhotoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Photo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PhotoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoFindFirstArgs<ExtArgs>>
    ): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Photo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PhotoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photo.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoWithIdOnly = await prisma.photo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PhotoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Photo.
     * @param {PhotoCreateArgs} args - Arguments to create a Photo.
     * @example
     * // Create one Photo
     * const Photo = await prisma.photo.create({
     *   data: {
     *     // ... data to create a Photo
     *   }
     * })
     * 
    **/
    create<T extends PhotoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoCreateArgs<ExtArgs>>
    ): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Photos.
     *     @param {PhotoCreateManyArgs} args - Arguments to create many Photos.
     *     @example
     *     // Create many Photos
     *     const photo = await prisma.photo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PhotoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Photo.
     * @param {PhotoDeleteArgs} args - Arguments to delete one Photo.
     * @example
     * // Delete one Photo
     * const Photo = await prisma.photo.delete({
     *   where: {
     *     // ... filter to delete one Photo
     *   }
     * })
     * 
    **/
    delete<T extends PhotoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoDeleteArgs<ExtArgs>>
    ): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Photo.
     * @param {PhotoUpdateArgs} args - Arguments to update one Photo.
     * @example
     * // Update one Photo
     * const photo = await prisma.photo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PhotoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoUpdateArgs<ExtArgs>>
    ): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Photos.
     * @param {PhotoDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PhotoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PhotoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Photo.
     * @param {PhotoUpsertArgs} args - Arguments to update or create a Photo.
     * @example
     * // Update or create a Photo
     * const photo = await prisma.photo.upsert({
     *   create: {
     *     // ... data to create a Photo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photo we want to update
     *   }
     * })
    **/
    upsert<T extends PhotoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoUpsertArgs<ExtArgs>>
    ): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photo.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends PhotoCountArgs>(
      args?: Subset<T, PhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotoAggregateArgs>(args: Subset<T, PhotoAggregateArgs>): Prisma.PrismaPromise<GetPhotoAggregateType<T>>

    /**
     * Group by Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoGroupByArgs['orderBy'] }
        : { orderBy?: PhotoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Photo model
   */
  readonly fields: PhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Photo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Photo model
   */ 
  interface PhotoFieldRefs {
    readonly id: FieldRef<"Photo", 'String'>
    readonly url: FieldRef<"Photo", 'String'>
    readonly type: FieldRef<"Photo", 'String'>
    readonly ticketId: FieldRef<"Photo", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Photo findUnique
   */
  export type PhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }


  /**
   * Photo findUniqueOrThrow
   */
  export type PhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }


  /**
   * Photo findFirst
   */
  export type PhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }


  /**
   * Photo findFirstOrThrow
   */
  export type PhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }


  /**
   * Photo findMany
   */
  export type PhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }


  /**
   * Photo create
   */
  export type PhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a Photo.
     */
    data: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
  }


  /**
   * Photo createMany
   */
  export type PhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Photo update
   */
  export type PhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a Photo.
     */
    data: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
    /**
     * Choose, which Photo to update.
     */
    where: PhotoWhereUniqueInput
  }


  /**
   * Photo updateMany
   */
  export type PhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
  }


  /**
   * Photo upsert
   */
  export type PhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the Photo to update in case it exists.
     */
    where: PhotoWhereUniqueInput
    /**
     * In case the Photo found by the `where` argument doesn't exist, create a new Photo with this data.
     */
    create: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
    /**
     * In case the Photo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
  }


  /**
   * Photo delete
   */
  export type PhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter which Photo to delete.
     */
    where: PhotoWhereUniqueInput
  }


  /**
   * Photo deleteMany
   */
  export type PhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photos to delete
     */
    where?: PhotoWhereInput
  }


  /**
   * Photo without action
   */
  export type PhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
  }



  /**
   * Model SparePart
   */

  export type AggregateSparePart = {
    _count: SparePartCountAggregateOutputType | null
    _avg: SparePartAvgAggregateOutputType | null
    _sum: SparePartSumAggregateOutputType | null
    _min: SparePartMinAggregateOutputType | null
    _max: SparePartMaxAggregateOutputType | null
  }

  export type SparePartAvgAggregateOutputType = {
    id: number | null
    price: number | null
    stock: number | null
  }

  export type SparePartSumAggregateOutputType = {
    id: number | null
    price: number | null
    stock: number | null
  }

  export type SparePartMinAggregateOutputType = {
    id: number | null
    name: string | null
    sku: string | null
    price: number | null
    stock: number | null
  }

  export type SparePartMaxAggregateOutputType = {
    id: number | null
    name: string | null
    sku: string | null
    price: number | null
    stock: number | null
  }

  export type SparePartCountAggregateOutputType = {
    id: number
    name: number
    sku: number
    price: number
    stock: number
    _all: number
  }


  export type SparePartAvgAggregateInputType = {
    id?: true
    price?: true
    stock?: true
  }

  export type SparePartSumAggregateInputType = {
    id?: true
    price?: true
    stock?: true
  }

  export type SparePartMinAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    price?: true
    stock?: true
  }

  export type SparePartMaxAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    price?: true
    stock?: true
  }

  export type SparePartCountAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    price?: true
    stock?: true
    _all?: true
  }

  export type SparePartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SparePart to aggregate.
     */
    where?: SparePartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpareParts to fetch.
     */
    orderBy?: SparePartOrderByWithRelationInput | SparePartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SparePartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpareParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpareParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpareParts
    **/
    _count?: true | SparePartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SparePartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SparePartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SparePartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SparePartMaxAggregateInputType
  }

  export type GetSparePartAggregateType<T extends SparePartAggregateArgs> = {
        [P in keyof T & keyof AggregateSparePart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSparePart[P]>
      : GetScalarType<T[P], AggregateSparePart[P]>
  }




  export type SparePartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SparePartWhereInput
    orderBy?: SparePartOrderByWithAggregationInput | SparePartOrderByWithAggregationInput[]
    by: SparePartScalarFieldEnum[] | SparePartScalarFieldEnum
    having?: SparePartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SparePartCountAggregateInputType | true
    _avg?: SparePartAvgAggregateInputType
    _sum?: SparePartSumAggregateInputType
    _min?: SparePartMinAggregateInputType
    _max?: SparePartMaxAggregateInputType
  }

  export type SparePartGroupByOutputType = {
    id: number
    name: string
    sku: string
    price: number
    stock: number
    _count: SparePartCountAggregateOutputType | null
    _avg: SparePartAvgAggregateOutputType | null
    _sum: SparePartSumAggregateOutputType | null
    _min: SparePartMinAggregateOutputType | null
    _max: SparePartMaxAggregateOutputType | null
  }

  type GetSparePartGroupByPayload<T extends SparePartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SparePartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SparePartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SparePartGroupByOutputType[P]>
            : GetScalarType<T[P], SparePartGroupByOutputType[P]>
        }
      >
    >


  export type SparePartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sku?: boolean
    price?: boolean
    stock?: boolean
  }, ExtArgs["result"]["sparePart"]>

  export type SparePartSelectScalar = {
    id?: boolean
    name?: boolean
    sku?: boolean
    price?: boolean
    stock?: boolean
  }


  export type $SparePartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SparePart"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      sku: string
      price: number
      stock: number
    }, ExtArgs["result"]["sparePart"]>
    composites: {}
  }


  type SparePartGetPayload<S extends boolean | null | undefined | SparePartDefaultArgs> = $Result.GetResult<Prisma.$SparePartPayload, S>

  type SparePartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SparePartFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SparePartCountAggregateInputType | true
    }

  export interface SparePartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SparePart'], meta: { name: 'SparePart' } }
    /**
     * Find zero or one SparePart that matches the filter.
     * @param {SparePartFindUniqueArgs} args - Arguments to find a SparePart
     * @example
     * // Get one SparePart
     * const sparePart = await prisma.sparePart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SparePartFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SparePartFindUniqueArgs<ExtArgs>>
    ): Prisma__SparePartClient<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SparePart that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SparePartFindUniqueOrThrowArgs} args - Arguments to find a SparePart
     * @example
     * // Get one SparePart
     * const sparePart = await prisma.sparePart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SparePartFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SparePartFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SparePartClient<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SparePart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparePartFindFirstArgs} args - Arguments to find a SparePart
     * @example
     * // Get one SparePart
     * const sparePart = await prisma.sparePart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SparePartFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SparePartFindFirstArgs<ExtArgs>>
    ): Prisma__SparePartClient<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SparePart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparePartFindFirstOrThrowArgs} args - Arguments to find a SparePart
     * @example
     * // Get one SparePart
     * const sparePart = await prisma.sparePart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SparePartFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SparePartFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SparePartClient<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SpareParts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparePartFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpareParts
     * const spareParts = await prisma.sparePart.findMany()
     * 
     * // Get first 10 SpareParts
     * const spareParts = await prisma.sparePart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sparePartWithIdOnly = await prisma.sparePart.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SparePartFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SparePartFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SparePart.
     * @param {SparePartCreateArgs} args - Arguments to create a SparePart.
     * @example
     * // Create one SparePart
     * const SparePart = await prisma.sparePart.create({
     *   data: {
     *     // ... data to create a SparePart
     *   }
     * })
     * 
    **/
    create<T extends SparePartCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SparePartCreateArgs<ExtArgs>>
    ): Prisma__SparePartClient<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SpareParts.
     *     @param {SparePartCreateManyArgs} args - Arguments to create many SpareParts.
     *     @example
     *     // Create many SpareParts
     *     const sparePart = await prisma.sparePart.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SparePartCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SparePartCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SparePart.
     * @param {SparePartDeleteArgs} args - Arguments to delete one SparePart.
     * @example
     * // Delete one SparePart
     * const SparePart = await prisma.sparePart.delete({
     *   where: {
     *     // ... filter to delete one SparePart
     *   }
     * })
     * 
    **/
    delete<T extends SparePartDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SparePartDeleteArgs<ExtArgs>>
    ): Prisma__SparePartClient<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SparePart.
     * @param {SparePartUpdateArgs} args - Arguments to update one SparePart.
     * @example
     * // Update one SparePart
     * const sparePart = await prisma.sparePart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SparePartUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SparePartUpdateArgs<ExtArgs>>
    ): Prisma__SparePartClient<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SpareParts.
     * @param {SparePartDeleteManyArgs} args - Arguments to filter SpareParts to delete.
     * @example
     * // Delete a few SpareParts
     * const { count } = await prisma.sparePart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SparePartDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SparePartDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpareParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparePartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpareParts
     * const sparePart = await prisma.sparePart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SparePartUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SparePartUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SparePart.
     * @param {SparePartUpsertArgs} args - Arguments to update or create a SparePart.
     * @example
     * // Update or create a SparePart
     * const sparePart = await prisma.sparePart.upsert({
     *   create: {
     *     // ... data to create a SparePart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SparePart we want to update
     *   }
     * })
    **/
    upsert<T extends SparePartUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SparePartUpsertArgs<ExtArgs>>
    ): Prisma__SparePartClient<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SpareParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparePartCountArgs} args - Arguments to filter SpareParts to count.
     * @example
     * // Count the number of SpareParts
     * const count = await prisma.sparePart.count({
     *   where: {
     *     // ... the filter for the SpareParts we want to count
     *   }
     * })
    **/
    count<T extends SparePartCountArgs>(
      args?: Subset<T, SparePartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SparePartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SparePart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparePartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SparePartAggregateArgs>(args: Subset<T, SparePartAggregateArgs>): Prisma.PrismaPromise<GetSparePartAggregateType<T>>

    /**
     * Group by SparePart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparePartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SparePartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SparePartGroupByArgs['orderBy'] }
        : { orderBy?: SparePartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SparePartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSparePartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SparePart model
   */
  readonly fields: SparePartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SparePart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SparePartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SparePart model
   */ 
  interface SparePartFieldRefs {
    readonly id: FieldRef<"SparePart", 'Int'>
    readonly name: FieldRef<"SparePart", 'String'>
    readonly sku: FieldRef<"SparePart", 'String'>
    readonly price: FieldRef<"SparePart", 'Float'>
    readonly stock: FieldRef<"SparePart", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * SparePart findUnique
   */
  export type SparePartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Filter, which SparePart to fetch.
     */
    where: SparePartWhereUniqueInput
  }


  /**
   * SparePart findUniqueOrThrow
   */
  export type SparePartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Filter, which SparePart to fetch.
     */
    where: SparePartWhereUniqueInput
  }


  /**
   * SparePart findFirst
   */
  export type SparePartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Filter, which SparePart to fetch.
     */
    where?: SparePartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpareParts to fetch.
     */
    orderBy?: SparePartOrderByWithRelationInput | SparePartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpareParts.
     */
    cursor?: SparePartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpareParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpareParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpareParts.
     */
    distinct?: SparePartScalarFieldEnum | SparePartScalarFieldEnum[]
  }


  /**
   * SparePart findFirstOrThrow
   */
  export type SparePartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Filter, which SparePart to fetch.
     */
    where?: SparePartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpareParts to fetch.
     */
    orderBy?: SparePartOrderByWithRelationInput | SparePartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpareParts.
     */
    cursor?: SparePartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpareParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpareParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpareParts.
     */
    distinct?: SparePartScalarFieldEnum | SparePartScalarFieldEnum[]
  }


  /**
   * SparePart findMany
   */
  export type SparePartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Filter, which SpareParts to fetch.
     */
    where?: SparePartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpareParts to fetch.
     */
    orderBy?: SparePartOrderByWithRelationInput | SparePartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpareParts.
     */
    cursor?: SparePartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpareParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpareParts.
     */
    skip?: number
    distinct?: SparePartScalarFieldEnum | SparePartScalarFieldEnum[]
  }


  /**
   * SparePart create
   */
  export type SparePartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * The data needed to create a SparePart.
     */
    data: XOR<SparePartCreateInput, SparePartUncheckedCreateInput>
  }


  /**
   * SparePart createMany
   */
  export type SparePartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpareParts.
     */
    data: SparePartCreateManyInput | SparePartCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * SparePart update
   */
  export type SparePartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * The data needed to update a SparePart.
     */
    data: XOR<SparePartUpdateInput, SparePartUncheckedUpdateInput>
    /**
     * Choose, which SparePart to update.
     */
    where: SparePartWhereUniqueInput
  }


  /**
   * SparePart updateMany
   */
  export type SparePartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpareParts.
     */
    data: XOR<SparePartUpdateManyMutationInput, SparePartUncheckedUpdateManyInput>
    /**
     * Filter which SpareParts to update
     */
    where?: SparePartWhereInput
  }


  /**
   * SparePart upsert
   */
  export type SparePartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * The filter to search for the SparePart to update in case it exists.
     */
    where: SparePartWhereUniqueInput
    /**
     * In case the SparePart found by the `where` argument doesn't exist, create a new SparePart with this data.
     */
    create: XOR<SparePartCreateInput, SparePartUncheckedCreateInput>
    /**
     * In case the SparePart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SparePartUpdateInput, SparePartUncheckedUpdateInput>
  }


  /**
   * SparePart delete
   */
  export type SparePartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Filter which SparePart to delete.
     */
    where: SparePartWhereUniqueInput
  }


  /**
   * SparePart deleteMany
   */
  export type SparePartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpareParts to delete
     */
    where?: SparePartWhereInput
  }


  /**
   * SparePart without action
   */
  export type SparePartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
  }



  /**
   * Model CompanySettings
   */

  export type AggregateCompanySettings = {
    _count: CompanySettingsCountAggregateOutputType | null
    _avg: CompanySettingsAvgAggregateOutputType | null
    _sum: CompanySettingsSumAggregateOutputType | null
    _min: CompanySettingsMinAggregateOutputType | null
    _max: CompanySettingsMaxAggregateOutputType | null
  }

  export type CompanySettingsAvgAggregateOutputType = {
    id: number | null
    ivaPercentage: number | null
  }

  export type CompanySettingsSumAggregateOutputType = {
    id: number | null
    ivaPercentage: number | null
  }

  export type CompanySettingsMinAggregateOutputType = {
    id: number | null
    name: string | null
    taxId: string | null
    address: string | null
    phone: string | null
    email: string | null
    logoUrl: string | null
    ivaPercentage: number | null
    currencySymbol: string | null
    currencyCode: string | null
    countryCode: string | null
    cloudinaryCloudName: string | null
    cloudinaryApiKey: string | null
    cloudinaryApiSecret: string | null
    externalDbUrl: string | null
    updatedAt: Date | null
  }

  export type CompanySettingsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    taxId: string | null
    address: string | null
    phone: string | null
    email: string | null
    logoUrl: string | null
    ivaPercentage: number | null
    currencySymbol: string | null
    currencyCode: string | null
    countryCode: string | null
    cloudinaryCloudName: string | null
    cloudinaryApiKey: string | null
    cloudinaryApiSecret: string | null
    externalDbUrl: string | null
    updatedAt: Date | null
  }

  export type CompanySettingsCountAggregateOutputType = {
    id: number
    name: number
    taxId: number
    address: number
    phone: number
    email: number
    logoUrl: number
    ivaPercentage: number
    currencySymbol: number
    currencyCode: number
    countryCode: number
    cloudinaryCloudName: number
    cloudinaryApiKey: number
    cloudinaryApiSecret: number
    externalDbUrl: number
    updatedAt: number
    _all: number
  }


  export type CompanySettingsAvgAggregateInputType = {
    id?: true
    ivaPercentage?: true
  }

  export type CompanySettingsSumAggregateInputType = {
    id?: true
    ivaPercentage?: true
  }

  export type CompanySettingsMinAggregateInputType = {
    id?: true
    name?: true
    taxId?: true
    address?: true
    phone?: true
    email?: true
    logoUrl?: true
    ivaPercentage?: true
    currencySymbol?: true
    currencyCode?: true
    countryCode?: true
    cloudinaryCloudName?: true
    cloudinaryApiKey?: true
    cloudinaryApiSecret?: true
    externalDbUrl?: true
    updatedAt?: true
  }

  export type CompanySettingsMaxAggregateInputType = {
    id?: true
    name?: true
    taxId?: true
    address?: true
    phone?: true
    email?: true
    logoUrl?: true
    ivaPercentage?: true
    currencySymbol?: true
    currencyCode?: true
    countryCode?: true
    cloudinaryCloudName?: true
    cloudinaryApiKey?: true
    cloudinaryApiSecret?: true
    externalDbUrl?: true
    updatedAt?: true
  }

  export type CompanySettingsCountAggregateInputType = {
    id?: true
    name?: true
    taxId?: true
    address?: true
    phone?: true
    email?: true
    logoUrl?: true
    ivaPercentage?: true
    currencySymbol?: true
    currencyCode?: true
    countryCode?: true
    cloudinaryCloudName?: true
    cloudinaryApiKey?: true
    cloudinaryApiSecret?: true
    externalDbUrl?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanySettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanySettings to aggregate.
     */
    where?: CompanySettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySettings to fetch.
     */
    orderBy?: CompanySettingsOrderByWithRelationInput | CompanySettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanySettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanySettings
    **/
    _count?: true | CompanySettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanySettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanySettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanySettingsMaxAggregateInputType
  }

  export type GetCompanySettingsAggregateType<T extends CompanySettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanySettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanySettings[P]>
      : GetScalarType<T[P], AggregateCompanySettings[P]>
  }




  export type CompanySettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanySettingsWhereInput
    orderBy?: CompanySettingsOrderByWithAggregationInput | CompanySettingsOrderByWithAggregationInput[]
    by: CompanySettingsScalarFieldEnum[] | CompanySettingsScalarFieldEnum
    having?: CompanySettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanySettingsCountAggregateInputType | true
    _avg?: CompanySettingsAvgAggregateInputType
    _sum?: CompanySettingsSumAggregateInputType
    _min?: CompanySettingsMinAggregateInputType
    _max?: CompanySettingsMaxAggregateInputType
  }

  export type CompanySettingsGroupByOutputType = {
    id: number
    name: string
    taxId: string
    address: string
    phone: string
    email: string
    logoUrl: string | null
    ivaPercentage: number
    currencySymbol: string
    currencyCode: string
    countryCode: string
    cloudinaryCloudName: string
    cloudinaryApiKey: string
    cloudinaryApiSecret: string
    externalDbUrl: string
    updatedAt: Date
    _count: CompanySettingsCountAggregateOutputType | null
    _avg: CompanySettingsAvgAggregateOutputType | null
    _sum: CompanySettingsSumAggregateOutputType | null
    _min: CompanySettingsMinAggregateOutputType | null
    _max: CompanySettingsMaxAggregateOutputType | null
  }

  type GetCompanySettingsGroupByPayload<T extends CompanySettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanySettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanySettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanySettingsGroupByOutputType[P]>
            : GetScalarType<T[P], CompanySettingsGroupByOutputType[P]>
        }
      >
    >


  export type CompanySettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    taxId?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    logoUrl?: boolean
    ivaPercentage?: boolean
    currencySymbol?: boolean
    currencyCode?: boolean
    countryCode?: boolean
    cloudinaryCloudName?: boolean
    cloudinaryApiKey?: boolean
    cloudinaryApiSecret?: boolean
    externalDbUrl?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["companySettings"]>

  export type CompanySettingsSelectScalar = {
    id?: boolean
    name?: boolean
    taxId?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    logoUrl?: boolean
    ivaPercentage?: boolean
    currencySymbol?: boolean
    currencyCode?: boolean
    countryCode?: boolean
    cloudinaryCloudName?: boolean
    cloudinaryApiKey?: boolean
    cloudinaryApiSecret?: boolean
    externalDbUrl?: boolean
    updatedAt?: boolean
  }


  export type $CompanySettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanySettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      taxId: string
      address: string
      phone: string
      email: string
      logoUrl: string | null
      ivaPercentage: number
      currencySymbol: string
      currencyCode: string
      countryCode: string
      cloudinaryCloudName: string
      cloudinaryApiKey: string
      cloudinaryApiSecret: string
      externalDbUrl: string
      updatedAt: Date
    }, ExtArgs["result"]["companySettings"]>
    composites: {}
  }


  type CompanySettingsGetPayload<S extends boolean | null | undefined | CompanySettingsDefaultArgs> = $Result.GetResult<Prisma.$CompanySettingsPayload, S>

  type CompanySettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompanySettingsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompanySettingsCountAggregateInputType | true
    }

  export interface CompanySettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanySettings'], meta: { name: 'CompanySettings' } }
    /**
     * Find zero or one CompanySettings that matches the filter.
     * @param {CompanySettingsFindUniqueArgs} args - Arguments to find a CompanySettings
     * @example
     * // Get one CompanySettings
     * const companySettings = await prisma.companySettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CompanySettingsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CompanySettingsFindUniqueArgs<ExtArgs>>
    ): Prisma__CompanySettingsClient<$Result.GetResult<Prisma.$CompanySettingsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CompanySettings that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CompanySettingsFindUniqueOrThrowArgs} args - Arguments to find a CompanySettings
     * @example
     * // Get one CompanySettings
     * const companySettings = await prisma.companySettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CompanySettingsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanySettingsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CompanySettingsClient<$Result.GetResult<Prisma.$CompanySettingsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CompanySettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySettingsFindFirstArgs} args - Arguments to find a CompanySettings
     * @example
     * // Get one CompanySettings
     * const companySettings = await prisma.companySettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CompanySettingsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanySettingsFindFirstArgs<ExtArgs>>
    ): Prisma__CompanySettingsClient<$Result.GetResult<Prisma.$CompanySettingsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CompanySettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySettingsFindFirstOrThrowArgs} args - Arguments to find a CompanySettings
     * @example
     * // Get one CompanySettings
     * const companySettings = await prisma.companySettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CompanySettingsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanySettingsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CompanySettingsClient<$Result.GetResult<Prisma.$CompanySettingsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CompanySettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySettingsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanySettings
     * const companySettings = await prisma.companySettings.findMany()
     * 
     * // Get first 10 CompanySettings
     * const companySettings = await prisma.companySettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companySettingsWithIdOnly = await prisma.companySettings.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CompanySettingsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanySettingsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanySettingsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CompanySettings.
     * @param {CompanySettingsCreateArgs} args - Arguments to create a CompanySettings.
     * @example
     * // Create one CompanySettings
     * const CompanySettings = await prisma.companySettings.create({
     *   data: {
     *     // ... data to create a CompanySettings
     *   }
     * })
     * 
    **/
    create<T extends CompanySettingsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CompanySettingsCreateArgs<ExtArgs>>
    ): Prisma__CompanySettingsClient<$Result.GetResult<Prisma.$CompanySettingsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CompanySettings.
     *     @param {CompanySettingsCreateManyArgs} args - Arguments to create many CompanySettings.
     *     @example
     *     // Create many CompanySettings
     *     const companySettings = await prisma.companySettings.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CompanySettingsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanySettingsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CompanySettings.
     * @param {CompanySettingsDeleteArgs} args - Arguments to delete one CompanySettings.
     * @example
     * // Delete one CompanySettings
     * const CompanySettings = await prisma.companySettings.delete({
     *   where: {
     *     // ... filter to delete one CompanySettings
     *   }
     * })
     * 
    **/
    delete<T extends CompanySettingsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CompanySettingsDeleteArgs<ExtArgs>>
    ): Prisma__CompanySettingsClient<$Result.GetResult<Prisma.$CompanySettingsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CompanySettings.
     * @param {CompanySettingsUpdateArgs} args - Arguments to update one CompanySettings.
     * @example
     * // Update one CompanySettings
     * const companySettings = await prisma.companySettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CompanySettingsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CompanySettingsUpdateArgs<ExtArgs>>
    ): Prisma__CompanySettingsClient<$Result.GetResult<Prisma.$CompanySettingsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CompanySettings.
     * @param {CompanySettingsDeleteManyArgs} args - Arguments to filter CompanySettings to delete.
     * @example
     * // Delete a few CompanySettings
     * const { count } = await prisma.companySettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CompanySettingsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanySettingsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanySettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanySettings
     * const companySettings = await prisma.companySettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CompanySettingsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CompanySettingsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CompanySettings.
     * @param {CompanySettingsUpsertArgs} args - Arguments to update or create a CompanySettings.
     * @example
     * // Update or create a CompanySettings
     * const companySettings = await prisma.companySettings.upsert({
     *   create: {
     *     // ... data to create a CompanySettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanySettings we want to update
     *   }
     * })
    **/
    upsert<T extends CompanySettingsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CompanySettingsUpsertArgs<ExtArgs>>
    ): Prisma__CompanySettingsClient<$Result.GetResult<Prisma.$CompanySettingsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CompanySettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySettingsCountArgs} args - Arguments to filter CompanySettings to count.
     * @example
     * // Count the number of CompanySettings
     * const count = await prisma.companySettings.count({
     *   where: {
     *     // ... the filter for the CompanySettings we want to count
     *   }
     * })
    **/
    count<T extends CompanySettingsCountArgs>(
      args?: Subset<T, CompanySettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanySettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanySettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanySettingsAggregateArgs>(args: Subset<T, CompanySettingsAggregateArgs>): Prisma.PrismaPromise<GetCompanySettingsAggregateType<T>>

    /**
     * Group by CompanySettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanySettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanySettingsGroupByArgs['orderBy'] }
        : { orderBy?: CompanySettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanySettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanySettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanySettings model
   */
  readonly fields: CompanySettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanySettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanySettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CompanySettings model
   */ 
  interface CompanySettingsFieldRefs {
    readonly id: FieldRef<"CompanySettings", 'Int'>
    readonly name: FieldRef<"CompanySettings", 'String'>
    readonly taxId: FieldRef<"CompanySettings", 'String'>
    readonly address: FieldRef<"CompanySettings", 'String'>
    readonly phone: FieldRef<"CompanySettings", 'String'>
    readonly email: FieldRef<"CompanySettings", 'String'>
    readonly logoUrl: FieldRef<"CompanySettings", 'String'>
    readonly ivaPercentage: FieldRef<"CompanySettings", 'Float'>
    readonly currencySymbol: FieldRef<"CompanySettings", 'String'>
    readonly currencyCode: FieldRef<"CompanySettings", 'String'>
    readonly countryCode: FieldRef<"CompanySettings", 'String'>
    readonly cloudinaryCloudName: FieldRef<"CompanySettings", 'String'>
    readonly cloudinaryApiKey: FieldRef<"CompanySettings", 'String'>
    readonly cloudinaryApiSecret: FieldRef<"CompanySettings", 'String'>
    readonly externalDbUrl: FieldRef<"CompanySettings", 'String'>
    readonly updatedAt: FieldRef<"CompanySettings", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * CompanySettings findUnique
   */
  export type CompanySettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySettings
     */
    select?: CompanySettingsSelect<ExtArgs> | null
    /**
     * Filter, which CompanySettings to fetch.
     */
    where: CompanySettingsWhereUniqueInput
  }


  /**
   * CompanySettings findUniqueOrThrow
   */
  export type CompanySettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySettings
     */
    select?: CompanySettingsSelect<ExtArgs> | null
    /**
     * Filter, which CompanySettings to fetch.
     */
    where: CompanySettingsWhereUniqueInput
  }


  /**
   * CompanySettings findFirst
   */
  export type CompanySettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySettings
     */
    select?: CompanySettingsSelect<ExtArgs> | null
    /**
     * Filter, which CompanySettings to fetch.
     */
    where?: CompanySettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySettings to fetch.
     */
    orderBy?: CompanySettingsOrderByWithRelationInput | CompanySettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanySettings.
     */
    cursor?: CompanySettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanySettings.
     */
    distinct?: CompanySettingsScalarFieldEnum | CompanySettingsScalarFieldEnum[]
  }


  /**
   * CompanySettings findFirstOrThrow
   */
  export type CompanySettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySettings
     */
    select?: CompanySettingsSelect<ExtArgs> | null
    /**
     * Filter, which CompanySettings to fetch.
     */
    where?: CompanySettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySettings to fetch.
     */
    orderBy?: CompanySettingsOrderByWithRelationInput | CompanySettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanySettings.
     */
    cursor?: CompanySettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanySettings.
     */
    distinct?: CompanySettingsScalarFieldEnum | CompanySettingsScalarFieldEnum[]
  }


  /**
   * CompanySettings findMany
   */
  export type CompanySettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySettings
     */
    select?: CompanySettingsSelect<ExtArgs> | null
    /**
     * Filter, which CompanySettings to fetch.
     */
    where?: CompanySettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySettings to fetch.
     */
    orderBy?: CompanySettingsOrderByWithRelationInput | CompanySettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanySettings.
     */
    cursor?: CompanySettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySettings.
     */
    skip?: number
    distinct?: CompanySettingsScalarFieldEnum | CompanySettingsScalarFieldEnum[]
  }


  /**
   * CompanySettings create
   */
  export type CompanySettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySettings
     */
    select?: CompanySettingsSelect<ExtArgs> | null
    /**
     * The data needed to create a CompanySettings.
     */
    data: XOR<CompanySettingsCreateInput, CompanySettingsUncheckedCreateInput>
  }


  /**
   * CompanySettings createMany
   */
  export type CompanySettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanySettings.
     */
    data: CompanySettingsCreateManyInput | CompanySettingsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CompanySettings update
   */
  export type CompanySettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySettings
     */
    select?: CompanySettingsSelect<ExtArgs> | null
    /**
     * The data needed to update a CompanySettings.
     */
    data: XOR<CompanySettingsUpdateInput, CompanySettingsUncheckedUpdateInput>
    /**
     * Choose, which CompanySettings to update.
     */
    where: CompanySettingsWhereUniqueInput
  }


  /**
   * CompanySettings updateMany
   */
  export type CompanySettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanySettings.
     */
    data: XOR<CompanySettingsUpdateManyMutationInput, CompanySettingsUncheckedUpdateManyInput>
    /**
     * Filter which CompanySettings to update
     */
    where?: CompanySettingsWhereInput
  }


  /**
   * CompanySettings upsert
   */
  export type CompanySettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySettings
     */
    select?: CompanySettingsSelect<ExtArgs> | null
    /**
     * The filter to search for the CompanySettings to update in case it exists.
     */
    where: CompanySettingsWhereUniqueInput
    /**
     * In case the CompanySettings found by the `where` argument doesn't exist, create a new CompanySettings with this data.
     */
    create: XOR<CompanySettingsCreateInput, CompanySettingsUncheckedCreateInput>
    /**
     * In case the CompanySettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanySettingsUpdateInput, CompanySettingsUncheckedUpdateInput>
  }


  /**
   * CompanySettings delete
   */
  export type CompanySettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySettings
     */
    select?: CompanySettingsSelect<ExtArgs> | null
    /**
     * Filter which CompanySettings to delete.
     */
    where: CompanySettingsWhereUniqueInput
  }


  /**
   * CompanySettings deleteMany
   */
  export type CompanySettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanySettings to delete
     */
    where?: CompanySettingsWhereInput
  }


  /**
   * CompanySettings without action
   */
  export type CompanySettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySettings
     */
    select?: CompanySettingsSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BrandScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    prefix: 'prefix'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TicketScalarFieldEnum: {
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

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    phone: 'phone',
    email: 'email',
    address: 'address',
    documentNumber: 'documentNumber'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    phone: 'phone',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PhotoScalarFieldEnum: {
    id: 'id',
    url: 'url',
    type: 'type',
    ticketId: 'ticketId'
  };

  export type PhotoScalarFieldEnum = (typeof PhotoScalarFieldEnum)[keyof typeof PhotoScalarFieldEnum]


  export const SparePartScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sku: 'sku',
    price: 'price',
    stock: 'stock'
  };

  export type SparePartScalarFieldEnum = (typeof SparePartScalarFieldEnum)[keyof typeof SparePartScalarFieldEnum]


  export const CompanySettingsScalarFieldEnum: {
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

  export type CompanySettingsScalarFieldEnum = (typeof CompanySettingsScalarFieldEnum)[keyof typeof CompanySettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type BrandWhereInput = {
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    id?: IntFilter<"Brand"> | number
    name?: StringFilter<"Brand"> | string
    tickets?: TicketListRelationFilter
  }

  export type BrandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type BrandWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    tickets?: TicketListRelationFilter
  }, "id" | "name">

  export type BrandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: BrandCountOrderByAggregateInput
    _avg?: BrandAvgOrderByAggregateInput
    _max?: BrandMaxOrderByAggregateInput
    _min?: BrandMinOrderByAggregateInput
    _sum?: BrandSumOrderByAggregateInput
  }

  export type BrandScalarWhereWithAggregatesInput = {
    AND?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    OR?: BrandScalarWhereWithAggregatesInput[]
    NOT?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Brand"> | number
    name?: StringWithAggregatesFilter<"Brand"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    prefix?: StringFilter<"Category"> | string
    tickets?: TicketListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    prefix?: SortOrder
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    prefix?: StringFilter<"Category"> | string
    tickets?: TicketListRelationFilter
  }, "id" | "name" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    prefix?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    prefix?: StringWithAggregatesFilter<"Category"> | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: StringFilter<"Ticket"> | string
    ticketNumber?: IntFilter<"Ticket"> | number
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    status?: StringFilter<"Ticket"> | string
    priority?: StringFilter<"Ticket"> | string
    cancellationReason?: StringNullableFilter<"Ticket"> | string | null
    customerId?: StringNullableFilter<"Ticket"> | string | null
    customerName?: StringFilter<"Ticket"> | string
    customerPhone?: StringFilter<"Ticket"> | string
    contactMethod?: StringNullableFilter<"Ticket"> | string | null
    addressStreet?: StringFilter<"Ticket"> | string
    addressColony?: StringFilter<"Ticket"> | string
    addressZip?: StringFilter<"Ticket"> | string
    addressCity?: StringFilter<"Ticket"> | string
    propertyType?: StringFilter<"Ticket"> | string
    brandId?: IntFilter<"Ticket"> | number
    categoryId?: IntFilter<"Ticket"> | number
    model?: StringNullableFilter<"Ticket"> | string | null
    serialNumber?: StringNullableFilter<"Ticket"> | string | null
    issueDescription?: StringFilter<"Ticket"> | string
    triageData?: StringFilter<"Ticket"> | string
    technicianId?: StringNullableFilter<"Ticket"> | string | null
    laborCost?: FloatFilter<"Ticket"> | number
    partsCost?: FloatFilter<"Ticket"> | number
    totalCost?: FloatFilter<"Ticket"> | number
    invoiceUrl?: StringNullableFilter<"Ticket"> | string | null
    signatureUrl?: StringNullableFilter<"Ticket"> | string | null
    technicianNotes?: StringNullableFilter<"Ticket"> | string | null
    isRepaired?: BoolFilter<"Ticket"> | boolean
    invoiceName?: StringNullableFilter<"Ticket"> | string | null
    invoiceTaxId?: StringNullableFilter<"Ticket"> | string | null
    invoiceEmail?: StringNullableFilter<"Ticket"> | string | null
    invoiceAddress?: StringNullableFilter<"Ticket"> | string | null
    includeIva?: BoolFilter<"Ticket"> | boolean
    appliedIvaPercentage?: FloatFilter<"Ticket"> | number
    customer?: XOR<CustomerNullableRelationFilter, CustomerWhereInput> | null
    brand?: XOR<BrandRelationFilter, BrandWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    technician?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    photos?: PhotoListRelationFilter
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    ticketNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    cancellationReason?: SortOrderInput | SortOrder
    customerId?: SortOrderInput | SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    contactMethod?: SortOrderInput | SortOrder
    addressStreet?: SortOrder
    addressColony?: SortOrder
    addressZip?: SortOrder
    addressCity?: SortOrder
    propertyType?: SortOrder
    brandId?: SortOrder
    categoryId?: SortOrder
    model?: SortOrderInput | SortOrder
    serialNumber?: SortOrderInput | SortOrder
    issueDescription?: SortOrder
    triageData?: SortOrder
    technicianId?: SortOrderInput | SortOrder
    laborCost?: SortOrder
    partsCost?: SortOrder
    totalCost?: SortOrder
    invoiceUrl?: SortOrderInput | SortOrder
    signatureUrl?: SortOrderInput | SortOrder
    technicianNotes?: SortOrderInput | SortOrder
    isRepaired?: SortOrder
    invoiceName?: SortOrderInput | SortOrder
    invoiceTaxId?: SortOrderInput | SortOrder
    invoiceEmail?: SortOrderInput | SortOrder
    invoiceAddress?: SortOrderInput | SortOrder
    includeIva?: SortOrder
    appliedIvaPercentage?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    brand?: BrandOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    technician?: UserOrderByWithRelationInput
    photos?: PhotoOrderByRelationAggregateInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    ticketNumber?: IntFilter<"Ticket"> | number
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    status?: StringFilter<"Ticket"> | string
    priority?: StringFilter<"Ticket"> | string
    cancellationReason?: StringNullableFilter<"Ticket"> | string | null
    customerId?: StringNullableFilter<"Ticket"> | string | null
    customerName?: StringFilter<"Ticket"> | string
    customerPhone?: StringFilter<"Ticket"> | string
    contactMethod?: StringNullableFilter<"Ticket"> | string | null
    addressStreet?: StringFilter<"Ticket"> | string
    addressColony?: StringFilter<"Ticket"> | string
    addressZip?: StringFilter<"Ticket"> | string
    addressCity?: StringFilter<"Ticket"> | string
    propertyType?: StringFilter<"Ticket"> | string
    brandId?: IntFilter<"Ticket"> | number
    categoryId?: IntFilter<"Ticket"> | number
    model?: StringNullableFilter<"Ticket"> | string | null
    serialNumber?: StringNullableFilter<"Ticket"> | string | null
    issueDescription?: StringFilter<"Ticket"> | string
    triageData?: StringFilter<"Ticket"> | string
    technicianId?: StringNullableFilter<"Ticket"> | string | null
    laborCost?: FloatFilter<"Ticket"> | number
    partsCost?: FloatFilter<"Ticket"> | number
    totalCost?: FloatFilter<"Ticket"> | number
    invoiceUrl?: StringNullableFilter<"Ticket"> | string | null
    signatureUrl?: StringNullableFilter<"Ticket"> | string | null
    technicianNotes?: StringNullableFilter<"Ticket"> | string | null
    isRepaired?: BoolFilter<"Ticket"> | boolean
    invoiceName?: StringNullableFilter<"Ticket"> | string | null
    invoiceTaxId?: StringNullableFilter<"Ticket"> | string | null
    invoiceEmail?: StringNullableFilter<"Ticket"> | string | null
    invoiceAddress?: StringNullableFilter<"Ticket"> | string | null
    includeIva?: BoolFilter<"Ticket"> | boolean
    appliedIvaPercentage?: FloatFilter<"Ticket"> | number
    customer?: XOR<CustomerNullableRelationFilter, CustomerWhereInput> | null
    brand?: XOR<BrandRelationFilter, BrandWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    technician?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    photos?: PhotoListRelationFilter
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    ticketNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    cancellationReason?: SortOrderInput | SortOrder
    customerId?: SortOrderInput | SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    contactMethod?: SortOrderInput | SortOrder
    addressStreet?: SortOrder
    addressColony?: SortOrder
    addressZip?: SortOrder
    addressCity?: SortOrder
    propertyType?: SortOrder
    brandId?: SortOrder
    categoryId?: SortOrder
    model?: SortOrderInput | SortOrder
    serialNumber?: SortOrderInput | SortOrder
    issueDescription?: SortOrder
    triageData?: SortOrder
    technicianId?: SortOrderInput | SortOrder
    laborCost?: SortOrder
    partsCost?: SortOrder
    totalCost?: SortOrder
    invoiceUrl?: SortOrderInput | SortOrder
    signatureUrl?: SortOrderInput | SortOrder
    technicianNotes?: SortOrderInput | SortOrder
    isRepaired?: SortOrder
    invoiceName?: SortOrderInput | SortOrder
    invoiceTaxId?: SortOrderInput | SortOrder
    invoiceEmail?: SortOrderInput | SortOrder
    invoiceAddress?: SortOrderInput | SortOrder
    includeIva?: SortOrder
    appliedIvaPercentage?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ticket"> | string
    ticketNumber?: IntWithAggregatesFilter<"Ticket"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    status?: StringWithAggregatesFilter<"Ticket"> | string
    priority?: StringWithAggregatesFilter<"Ticket"> | string
    cancellationReason?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    customerId?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    customerName?: StringWithAggregatesFilter<"Ticket"> | string
    customerPhone?: StringWithAggregatesFilter<"Ticket"> | string
    contactMethod?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    addressStreet?: StringWithAggregatesFilter<"Ticket"> | string
    addressColony?: StringWithAggregatesFilter<"Ticket"> | string
    addressZip?: StringWithAggregatesFilter<"Ticket"> | string
    addressCity?: StringWithAggregatesFilter<"Ticket"> | string
    propertyType?: StringWithAggregatesFilter<"Ticket"> | string
    brandId?: IntWithAggregatesFilter<"Ticket"> | number
    categoryId?: IntWithAggregatesFilter<"Ticket"> | number
    model?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    serialNumber?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    issueDescription?: StringWithAggregatesFilter<"Ticket"> | string
    triageData?: StringWithAggregatesFilter<"Ticket"> | string
    technicianId?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    laborCost?: FloatWithAggregatesFilter<"Ticket"> | number
    partsCost?: FloatWithAggregatesFilter<"Ticket"> | number
    totalCost?: FloatWithAggregatesFilter<"Ticket"> | number
    invoiceUrl?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    signatureUrl?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    technicianNotes?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    isRepaired?: BoolWithAggregatesFilter<"Ticket"> | boolean
    invoiceName?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    invoiceTaxId?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    invoiceEmail?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    invoiceAddress?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    includeIva?: BoolWithAggregatesFilter<"Ticket"> | boolean
    appliedIvaPercentage?: FloatWithAggregatesFilter<"Ticket"> | number
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    name?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    documentNumber?: StringNullableFilter<"Customer"> | string | null
    tickets?: TicketListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    documentNumber?: SortOrderInput | SortOrder
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    documentNumber?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    name?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    tickets?: TicketListRelationFilter
  }, "id" | "phone" | "documentNumber">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    documentNumber?: SortOrderInput | SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    address?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    documentNumber?: StringNullableWithAggregatesFilter<"Customer"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    tickets?: TicketListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    tickets?: TicketListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type PhotoWhereInput = {
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    id?: StringFilter<"Photo"> | string
    url?: StringFilter<"Photo"> | string
    type?: StringFilter<"Photo"> | string
    ticketId?: StringFilter<"Photo"> | string
    ticket?: XOR<TicketRelationFilter, TicketWhereInput>
  }

  export type PhotoOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    ticketId?: SortOrder
    ticket?: TicketOrderByWithRelationInput
  }

  export type PhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    url?: StringFilter<"Photo"> | string
    type?: StringFilter<"Photo"> | string
    ticketId?: StringFilter<"Photo"> | string
    ticket?: XOR<TicketRelationFilter, TicketWhereInput>
  }, "id">

  export type PhotoOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    ticketId?: SortOrder
    _count?: PhotoCountOrderByAggregateInput
    _max?: PhotoMaxOrderByAggregateInput
    _min?: PhotoMinOrderByAggregateInput
  }

  export type PhotoScalarWhereWithAggregatesInput = {
    AND?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    OR?: PhotoScalarWhereWithAggregatesInput[]
    NOT?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Photo"> | string
    url?: StringWithAggregatesFilter<"Photo"> | string
    type?: StringWithAggregatesFilter<"Photo"> | string
    ticketId?: StringWithAggregatesFilter<"Photo"> | string
  }

  export type SparePartWhereInput = {
    AND?: SparePartWhereInput | SparePartWhereInput[]
    OR?: SparePartWhereInput[]
    NOT?: SparePartWhereInput | SparePartWhereInput[]
    id?: IntFilter<"SparePart"> | number
    name?: StringFilter<"SparePart"> | string
    sku?: StringFilter<"SparePart"> | string
    price?: FloatFilter<"SparePart"> | number
    stock?: IntFilter<"SparePart"> | number
  }

  export type SparePartOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type SparePartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sku?: string
    AND?: SparePartWhereInput | SparePartWhereInput[]
    OR?: SparePartWhereInput[]
    NOT?: SparePartWhereInput | SparePartWhereInput[]
    name?: StringFilter<"SparePart"> | string
    price?: FloatFilter<"SparePart"> | number
    stock?: IntFilter<"SparePart"> | number
  }, "id" | "sku">

  export type SparePartOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    _count?: SparePartCountOrderByAggregateInput
    _avg?: SparePartAvgOrderByAggregateInput
    _max?: SparePartMaxOrderByAggregateInput
    _min?: SparePartMinOrderByAggregateInput
    _sum?: SparePartSumOrderByAggregateInput
  }

  export type SparePartScalarWhereWithAggregatesInput = {
    AND?: SparePartScalarWhereWithAggregatesInput | SparePartScalarWhereWithAggregatesInput[]
    OR?: SparePartScalarWhereWithAggregatesInput[]
    NOT?: SparePartScalarWhereWithAggregatesInput | SparePartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SparePart"> | number
    name?: StringWithAggregatesFilter<"SparePart"> | string
    sku?: StringWithAggregatesFilter<"SparePart"> | string
    price?: FloatWithAggregatesFilter<"SparePart"> | number
    stock?: IntWithAggregatesFilter<"SparePart"> | number
  }

  export type CompanySettingsWhereInput = {
    AND?: CompanySettingsWhereInput | CompanySettingsWhereInput[]
    OR?: CompanySettingsWhereInput[]
    NOT?: CompanySettingsWhereInput | CompanySettingsWhereInput[]
    id?: IntFilter<"CompanySettings"> | number
    name?: StringFilter<"CompanySettings"> | string
    taxId?: StringFilter<"CompanySettings"> | string
    address?: StringFilter<"CompanySettings"> | string
    phone?: StringFilter<"CompanySettings"> | string
    email?: StringFilter<"CompanySettings"> | string
    logoUrl?: StringNullableFilter<"CompanySettings"> | string | null
    ivaPercentage?: FloatFilter<"CompanySettings"> | number
    currencySymbol?: StringFilter<"CompanySettings"> | string
    currencyCode?: StringFilter<"CompanySettings"> | string
    countryCode?: StringFilter<"CompanySettings"> | string
    cloudinaryCloudName?: StringFilter<"CompanySettings"> | string
    cloudinaryApiKey?: StringFilter<"CompanySettings"> | string
    cloudinaryApiSecret?: StringFilter<"CompanySettings"> | string
    externalDbUrl?: StringFilter<"CompanySettings"> | string
    updatedAt?: DateTimeFilter<"CompanySettings"> | Date | string
  }

  export type CompanySettingsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    taxId?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    ivaPercentage?: SortOrder
    currencySymbol?: SortOrder
    currencyCode?: SortOrder
    countryCode?: SortOrder
    cloudinaryCloudName?: SortOrder
    cloudinaryApiKey?: SortOrder
    cloudinaryApiSecret?: SortOrder
    externalDbUrl?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanySettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanySettingsWhereInput | CompanySettingsWhereInput[]
    OR?: CompanySettingsWhereInput[]
    NOT?: CompanySettingsWhereInput | CompanySettingsWhereInput[]
    name?: StringFilter<"CompanySettings"> | string
    taxId?: StringFilter<"CompanySettings"> | string
    address?: StringFilter<"CompanySettings"> | string
    phone?: StringFilter<"CompanySettings"> | string
    email?: StringFilter<"CompanySettings"> | string
    logoUrl?: StringNullableFilter<"CompanySettings"> | string | null
    ivaPercentage?: FloatFilter<"CompanySettings"> | number
    currencySymbol?: StringFilter<"CompanySettings"> | string
    currencyCode?: StringFilter<"CompanySettings"> | string
    countryCode?: StringFilter<"CompanySettings"> | string
    cloudinaryCloudName?: StringFilter<"CompanySettings"> | string
    cloudinaryApiKey?: StringFilter<"CompanySettings"> | string
    cloudinaryApiSecret?: StringFilter<"CompanySettings"> | string
    externalDbUrl?: StringFilter<"CompanySettings"> | string
    updatedAt?: DateTimeFilter<"CompanySettings"> | Date | string
  }, "id">

  export type CompanySettingsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    taxId?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    ivaPercentage?: SortOrder
    currencySymbol?: SortOrder
    currencyCode?: SortOrder
    countryCode?: SortOrder
    cloudinaryCloudName?: SortOrder
    cloudinaryApiKey?: SortOrder
    cloudinaryApiSecret?: SortOrder
    externalDbUrl?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanySettingsCountOrderByAggregateInput
    _avg?: CompanySettingsAvgOrderByAggregateInput
    _max?: CompanySettingsMaxOrderByAggregateInput
    _min?: CompanySettingsMinOrderByAggregateInput
    _sum?: CompanySettingsSumOrderByAggregateInput
  }

  export type CompanySettingsScalarWhereWithAggregatesInput = {
    AND?: CompanySettingsScalarWhereWithAggregatesInput | CompanySettingsScalarWhereWithAggregatesInput[]
    OR?: CompanySettingsScalarWhereWithAggregatesInput[]
    NOT?: CompanySettingsScalarWhereWithAggregatesInput | CompanySettingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CompanySettings"> | number
    name?: StringWithAggregatesFilter<"CompanySettings"> | string
    taxId?: StringWithAggregatesFilter<"CompanySettings"> | string
    address?: StringWithAggregatesFilter<"CompanySettings"> | string
    phone?: StringWithAggregatesFilter<"CompanySettings"> | string
    email?: StringWithAggregatesFilter<"CompanySettings"> | string
    logoUrl?: StringNullableWithAggregatesFilter<"CompanySettings"> | string | null
    ivaPercentage?: FloatWithAggregatesFilter<"CompanySettings"> | number
    currencySymbol?: StringWithAggregatesFilter<"CompanySettings"> | string
    currencyCode?: StringWithAggregatesFilter<"CompanySettings"> | string
    countryCode?: StringWithAggregatesFilter<"CompanySettings"> | string
    cloudinaryCloudName?: StringWithAggregatesFilter<"CompanySettings"> | string
    cloudinaryApiKey?: StringWithAggregatesFilter<"CompanySettings"> | string
    cloudinaryApiSecret?: StringWithAggregatesFilter<"CompanySettings"> | string
    externalDbUrl?: StringWithAggregatesFilter<"CompanySettings"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"CompanySettings"> | Date | string
  }

  export type BrandCreateInput = {
    name: string
    tickets?: TicketCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateInput = {
    id?: number
    name: string
    tickets?: TicketUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandCreateManyInput = {
    id?: number
    name: string
  }

  export type BrandUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BrandUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    name: string
    slug: string
    prefix?: string
    tickets?: TicketCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    prefix?: string
    tickets?: TicketUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    slug: string
    prefix?: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
  }

  export type TicketCreateInput = {
    id?: string
    ticketNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    priority?: string
    cancellationReason?: string | null
    customerName: string
    customerPhone: string
    contactMethod?: string | null
    addressStreet?: string
    addressColony?: string
    addressZip?: string
    addressCity?: string
    propertyType?: string
    model?: string | null
    serialNumber?: string | null
    issueDescription: string
    triageData: string
    laborCost?: number
    partsCost?: number
    totalCost?: number
    invoiceUrl?: string | null
    signatureUrl?: string | null
    technicianNotes?: string | null
    isRepaired?: boolean
    invoiceName?: string | null
    invoiceTaxId?: string | null
    invoiceEmail?: string | null
    invoiceAddress?: string | null
    includeIva?: boolean
    appliedIvaPercentage?: number
    customer?: CustomerCreateNestedOneWithoutTicketsInput
    brand: BrandCreateNestedOneWithoutTicketsInput
    category: CategoryCreateNestedOneWithoutTicketsInput
    technician?: UserCreateNestedOneWithoutTicketsInput
    photos?: PhotoCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: string
    ticketNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    priority?: string
    cancellationReason?: string | null
    customerId?: string | null
    customerName: string
    customerPhone: string
    contactMethod?: string | null
    addressStreet?: string
    addressColony?: string
    addressZip?: string
    addressCity?: string
    propertyType?: string
    brandId: number
    categoryId: number
    model?: string | null
    serialNumber?: string | null
    issueDescription: string
    triageData: string
    technicianId?: string | null
    laborCost?: number
    partsCost?: number
    totalCost?: number
    invoiceUrl?: string | null
    signatureUrl?: string | null
    technicianNotes?: string | null
    isRepaired?: boolean
    invoiceName?: string | null
    invoiceTaxId?: string | null
    invoiceEmail?: string | null
    invoiceAddress?: string | null
    includeIva?: boolean
    appliedIvaPercentage?: number
    photos?: PhotoUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    contactMethod?: NullableStringFieldUpdateOperationsInput | string | null
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressColony?: StringFieldUpdateOperationsInput | string
    addressZip?: StringFieldUpdateOperationsInput | string
    addressCity?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDescription?: StringFieldUpdateOperationsInput | string
    triageData?: StringFieldUpdateOperationsInput | string
    laborCost?: FloatFieldUpdateOperationsInput | number
    partsCost?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepaired?: BoolFieldUpdateOperationsInput | boolean
    invoiceName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    includeIva?: BoolFieldUpdateOperationsInput | boolean
    appliedIvaPercentage?: FloatFieldUpdateOperationsInput | number
    customer?: CustomerUpdateOneWithoutTicketsNestedInput
    brand?: BrandUpdateOneRequiredWithoutTicketsNestedInput
    category?: CategoryUpdateOneRequiredWithoutTicketsNestedInput
    technician?: UserUpdateOneWithoutTicketsNestedInput
    photos?: PhotoUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    contactMethod?: NullableStringFieldUpdateOperationsInput | string | null
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressColony?: StringFieldUpdateOperationsInput | string
    addressZip?: StringFieldUpdateOperationsInput | string
    addressCity?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDescription?: StringFieldUpdateOperationsInput | string
    triageData?: StringFieldUpdateOperationsInput | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    laborCost?: FloatFieldUpdateOperationsInput | number
    partsCost?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepaired?: BoolFieldUpdateOperationsInput | boolean
    invoiceName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    includeIva?: BoolFieldUpdateOperationsInput | boolean
    appliedIvaPercentage?: FloatFieldUpdateOperationsInput | number
    photos?: PhotoUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: string
    ticketNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    priority?: string
    cancellationReason?: string | null
    customerId?: string | null
    customerName: string
    customerPhone: string
    contactMethod?: string | null
    addressStreet?: string
    addressColony?: string
    addressZip?: string
    addressCity?: string
    propertyType?: string
    brandId: number
    categoryId: number
    model?: string | null
    serialNumber?: string | null
    issueDescription: string
    triageData: string
    technicianId?: string | null
    laborCost?: number
    partsCost?: number
    totalCost?: number
    invoiceUrl?: string | null
    signatureUrl?: string | null
    technicianNotes?: string | null
    isRepaired?: boolean
    invoiceName?: string | null
    invoiceTaxId?: string | null
    invoiceEmail?: string | null
    invoiceAddress?: string | null
    includeIva?: boolean
    appliedIvaPercentage?: number
  }

  export type TicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    contactMethod?: NullableStringFieldUpdateOperationsInput | string | null
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressColony?: StringFieldUpdateOperationsInput | string
    addressZip?: StringFieldUpdateOperationsInput | string
    addressCity?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDescription?: StringFieldUpdateOperationsInput | string
    triageData?: StringFieldUpdateOperationsInput | string
    laborCost?: FloatFieldUpdateOperationsInput | number
    partsCost?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepaired?: BoolFieldUpdateOperationsInput | boolean
    invoiceName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    includeIva?: BoolFieldUpdateOperationsInput | boolean
    appliedIvaPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    contactMethod?: NullableStringFieldUpdateOperationsInput | string | null
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressColony?: StringFieldUpdateOperationsInput | string
    addressZip?: StringFieldUpdateOperationsInput | string
    addressCity?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDescription?: StringFieldUpdateOperationsInput | string
    triageData?: StringFieldUpdateOperationsInput | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    laborCost?: FloatFieldUpdateOperationsInput | number
    partsCost?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepaired?: BoolFieldUpdateOperationsInput | boolean
    invoiceName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    includeIva?: BoolFieldUpdateOperationsInput | boolean
    appliedIvaPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type CustomerCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    documentNumber?: string | null
    tickets?: TicketCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    documentNumber?: string | null
    tickets?: TicketUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: TicketUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: TicketUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    documentNumber?: string | null
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    phone?: string | null
    role?: string
    tickets?: TicketCreateNestedManyWithoutTechnicianInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    phone?: string | null
    role?: string
    tickets?: TicketUncheckedCreateNestedManyWithoutTechnicianInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUpdateManyWithoutTechnicianNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUncheckedUpdateManyWithoutTechnicianNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    phone?: string | null
    role?: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoCreateInput = {
    id?: string
    url: string
    type: string
    ticket: TicketCreateNestedOneWithoutPhotosInput
  }

  export type PhotoUncheckedCreateInput = {
    id?: string
    url: string
    type: string
    ticketId: string
  }

  export type PhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    ticket?: TicketUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type PhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoCreateManyInput = {
    id?: string
    url: string
    type: string
    ticketId: string
  }

  export type PhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
  }

  export type SparePartCreateInput = {
    name: string
    sku: string
    price: number
    stock?: number
  }

  export type SparePartUncheckedCreateInput = {
    id?: number
    name: string
    sku: string
    price: number
    stock?: number
  }

  export type SparePartUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type SparePartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type SparePartCreateManyInput = {
    id?: number
    name: string
    sku: string
    price: number
    stock?: number
  }

  export type SparePartUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type SparePartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type CompanySettingsCreateInput = {
    id?: number
    name?: string
    taxId?: string
    address?: string
    phone?: string
    email?: string
    logoUrl?: string | null
    ivaPercentage?: number
    currencySymbol?: string
    currencyCode?: string
    countryCode?: string
    cloudinaryCloudName?: string
    cloudinaryApiKey?: string
    cloudinaryApiSecret?: string
    externalDbUrl?: string
    updatedAt?: Date | string
  }

  export type CompanySettingsUncheckedCreateInput = {
    id?: number
    name?: string
    taxId?: string
    address?: string
    phone?: string
    email?: string
    logoUrl?: string | null
    ivaPercentage?: number
    currencySymbol?: string
    currencyCode?: string
    countryCode?: string
    cloudinaryCloudName?: string
    cloudinaryApiKey?: string
    cloudinaryApiSecret?: string
    externalDbUrl?: string
    updatedAt?: Date | string
  }

  export type CompanySettingsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ivaPercentage?: FloatFieldUpdateOperationsInput | number
    currencySymbol?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    cloudinaryCloudName?: StringFieldUpdateOperationsInput | string
    cloudinaryApiKey?: StringFieldUpdateOperationsInput | string
    cloudinaryApiSecret?: StringFieldUpdateOperationsInput | string
    externalDbUrl?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanySettingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ivaPercentage?: FloatFieldUpdateOperationsInput | number
    currencySymbol?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    cloudinaryCloudName?: StringFieldUpdateOperationsInput | string
    cloudinaryApiKey?: StringFieldUpdateOperationsInput | string
    cloudinaryApiSecret?: StringFieldUpdateOperationsInput | string
    externalDbUrl?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanySettingsCreateManyInput = {
    id?: number
    name?: string
    taxId?: string
    address?: string
    phone?: string
    email?: string
    logoUrl?: string | null
    ivaPercentage?: number
    currencySymbol?: string
    currencyCode?: string
    countryCode?: string
    cloudinaryCloudName?: string
    cloudinaryApiKey?: string
    cloudinaryApiSecret?: string
    externalDbUrl?: string
    updatedAt?: Date | string
  }

  export type CompanySettingsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ivaPercentage?: FloatFieldUpdateOperationsInput | number
    currencySymbol?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    cloudinaryCloudName?: StringFieldUpdateOperationsInput | string
    cloudinaryApiKey?: StringFieldUpdateOperationsInput | string
    cloudinaryApiSecret?: StringFieldUpdateOperationsInput | string
    externalDbUrl?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanySettingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ivaPercentage?: FloatFieldUpdateOperationsInput | number
    currencySymbol?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    cloudinaryCloudName?: StringFieldUpdateOperationsInput | string
    cloudinaryApiKey?: StringFieldUpdateOperationsInput | string
    cloudinaryApiSecret?: StringFieldUpdateOperationsInput | string
    externalDbUrl?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BrandAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BrandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BrandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BrandSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    prefix?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    prefix?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    prefix?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CustomerNullableRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type BrandRelationFilter = {
    is?: BrandWhereInput
    isNot?: BrandWhereInput
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PhotoListRelationFilter = {
    every?: PhotoWhereInput
    some?: PhotoWhereInput
    none?: PhotoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    ticketNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    cancellationReason?: SortOrder
    customerId?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    contactMethod?: SortOrder
    addressStreet?: SortOrder
    addressColony?: SortOrder
    addressZip?: SortOrder
    addressCity?: SortOrder
    propertyType?: SortOrder
    brandId?: SortOrder
    categoryId?: SortOrder
    model?: SortOrder
    serialNumber?: SortOrder
    issueDescription?: SortOrder
    triageData?: SortOrder
    technicianId?: SortOrder
    laborCost?: SortOrder
    partsCost?: SortOrder
    totalCost?: SortOrder
    invoiceUrl?: SortOrder
    signatureUrl?: SortOrder
    technicianNotes?: SortOrder
    isRepaired?: SortOrder
    invoiceName?: SortOrder
    invoiceTaxId?: SortOrder
    invoiceEmail?: SortOrder
    invoiceAddress?: SortOrder
    includeIva?: SortOrder
    appliedIvaPercentage?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    ticketNumber?: SortOrder
    brandId?: SortOrder
    categoryId?: SortOrder
    laborCost?: SortOrder
    partsCost?: SortOrder
    totalCost?: SortOrder
    appliedIvaPercentage?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    cancellationReason?: SortOrder
    customerId?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    contactMethod?: SortOrder
    addressStreet?: SortOrder
    addressColony?: SortOrder
    addressZip?: SortOrder
    addressCity?: SortOrder
    propertyType?: SortOrder
    brandId?: SortOrder
    categoryId?: SortOrder
    model?: SortOrder
    serialNumber?: SortOrder
    issueDescription?: SortOrder
    triageData?: SortOrder
    technicianId?: SortOrder
    laborCost?: SortOrder
    partsCost?: SortOrder
    totalCost?: SortOrder
    invoiceUrl?: SortOrder
    signatureUrl?: SortOrder
    technicianNotes?: SortOrder
    isRepaired?: SortOrder
    invoiceName?: SortOrder
    invoiceTaxId?: SortOrder
    invoiceEmail?: SortOrder
    invoiceAddress?: SortOrder
    includeIva?: SortOrder
    appliedIvaPercentage?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    ticketNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    cancellationReason?: SortOrder
    customerId?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    contactMethod?: SortOrder
    addressStreet?: SortOrder
    addressColony?: SortOrder
    addressZip?: SortOrder
    addressCity?: SortOrder
    propertyType?: SortOrder
    brandId?: SortOrder
    categoryId?: SortOrder
    model?: SortOrder
    serialNumber?: SortOrder
    issueDescription?: SortOrder
    triageData?: SortOrder
    technicianId?: SortOrder
    laborCost?: SortOrder
    partsCost?: SortOrder
    totalCost?: SortOrder
    invoiceUrl?: SortOrder
    signatureUrl?: SortOrder
    technicianNotes?: SortOrder
    isRepaired?: SortOrder
    invoiceName?: SortOrder
    invoiceTaxId?: SortOrder
    invoiceEmail?: SortOrder
    invoiceAddress?: SortOrder
    includeIva?: SortOrder
    appliedIvaPercentage?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    ticketNumber?: SortOrder
    brandId?: SortOrder
    categoryId?: SortOrder
    laborCost?: SortOrder
    partsCost?: SortOrder
    totalCost?: SortOrder
    appliedIvaPercentage?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    documentNumber?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    documentNumber?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    documentNumber?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
  }

  export type TicketRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type PhotoCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    ticketId?: SortOrder
  }

  export type PhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    ticketId?: SortOrder
  }

  export type PhotoMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    ticketId?: SortOrder
  }

  export type SparePartCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type SparePartAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type SparePartMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type SparePartMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type SparePartSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type CompanySettingsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    taxId?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    logoUrl?: SortOrder
    ivaPercentage?: SortOrder
    currencySymbol?: SortOrder
    currencyCode?: SortOrder
    countryCode?: SortOrder
    cloudinaryCloudName?: SortOrder
    cloudinaryApiKey?: SortOrder
    cloudinaryApiSecret?: SortOrder
    externalDbUrl?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanySettingsAvgOrderByAggregateInput = {
    id?: SortOrder
    ivaPercentage?: SortOrder
  }

  export type CompanySettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    taxId?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    logoUrl?: SortOrder
    ivaPercentage?: SortOrder
    currencySymbol?: SortOrder
    currencyCode?: SortOrder
    countryCode?: SortOrder
    cloudinaryCloudName?: SortOrder
    cloudinaryApiKey?: SortOrder
    cloudinaryApiSecret?: SortOrder
    externalDbUrl?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanySettingsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    taxId?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    logoUrl?: SortOrder
    ivaPercentage?: SortOrder
    currencySymbol?: SortOrder
    currencyCode?: SortOrder
    countryCode?: SortOrder
    cloudinaryCloudName?: SortOrder
    cloudinaryApiKey?: SortOrder
    cloudinaryApiSecret?: SortOrder
    externalDbUrl?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanySettingsSumOrderByAggregateInput = {
    id?: SortOrder
    ivaPercentage?: SortOrder
  }

  export type TicketCreateNestedManyWithoutBrandInput = {
    create?: XOR<TicketCreateWithoutBrandInput, TicketUncheckedCreateWithoutBrandInput> | TicketCreateWithoutBrandInput[] | TicketUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBrandInput | TicketCreateOrConnectWithoutBrandInput[]
    createMany?: TicketCreateManyBrandInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<TicketCreateWithoutBrandInput, TicketUncheckedCreateWithoutBrandInput> | TicketCreateWithoutBrandInput[] | TicketUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBrandInput | TicketCreateOrConnectWithoutBrandInput[]
    createMany?: TicketCreateManyBrandInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TicketUpdateManyWithoutBrandNestedInput = {
    create?: XOR<TicketCreateWithoutBrandInput, TicketUncheckedCreateWithoutBrandInput> | TicketCreateWithoutBrandInput[] | TicketUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBrandInput | TicketCreateOrConnectWithoutBrandInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutBrandInput | TicketUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: TicketCreateManyBrandInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutBrandInput | TicketUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutBrandInput | TicketUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TicketUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<TicketCreateWithoutBrandInput, TicketUncheckedCreateWithoutBrandInput> | TicketCreateWithoutBrandInput[] | TicketUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBrandInput | TicketCreateOrConnectWithoutBrandInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutBrandInput | TicketUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: TicketCreateManyBrandInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutBrandInput | TicketUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutBrandInput | TicketUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TicketCreateWithoutCategoryInput, TicketUncheckedCreateWithoutCategoryInput> | TicketCreateWithoutCategoryInput[] | TicketUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCategoryInput | TicketCreateOrConnectWithoutCategoryInput[]
    createMany?: TicketCreateManyCategoryInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TicketCreateWithoutCategoryInput, TicketUncheckedCreateWithoutCategoryInput> | TicketCreateWithoutCategoryInput[] | TicketUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCategoryInput | TicketCreateOrConnectWithoutCategoryInput[]
    createMany?: TicketCreateManyCategoryInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TicketCreateWithoutCategoryInput, TicketUncheckedCreateWithoutCategoryInput> | TicketCreateWithoutCategoryInput[] | TicketUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCategoryInput | TicketCreateOrConnectWithoutCategoryInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCategoryInput | TicketUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TicketCreateManyCategoryInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCategoryInput | TicketUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCategoryInput | TicketUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TicketCreateWithoutCategoryInput, TicketUncheckedCreateWithoutCategoryInput> | TicketCreateWithoutCategoryInput[] | TicketUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCategoryInput | TicketCreateOrConnectWithoutCategoryInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCategoryInput | TicketUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TicketCreateManyCategoryInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCategoryInput | TicketUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCategoryInput | TicketUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutTicketsInput = {
    create?: XOR<CustomerCreateWithoutTicketsInput, CustomerUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTicketsInput
    connect?: CustomerWhereUniqueInput
  }

  export type BrandCreateNestedOneWithoutTicketsInput = {
    create?: XOR<BrandCreateWithoutTicketsInput, BrandUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutTicketsInput
    connect?: BrandWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutTicketsInput = {
    create?: XOR<CategoryCreateWithoutTicketsInput, CategoryUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTicketsInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTicketsInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type PhotoCreateNestedManyWithoutTicketInput = {
    create?: XOR<PhotoCreateWithoutTicketInput, PhotoUncheckedCreateWithoutTicketInput> | PhotoCreateWithoutTicketInput[] | PhotoUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutTicketInput | PhotoCreateOrConnectWithoutTicketInput[]
    createMany?: PhotoCreateManyTicketInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type PhotoUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<PhotoCreateWithoutTicketInput, PhotoUncheckedCreateWithoutTicketInput> | PhotoCreateWithoutTicketInput[] | PhotoUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutTicketInput | PhotoCreateOrConnectWithoutTicketInput[]
    createMany?: PhotoCreateManyTicketInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CustomerUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<CustomerCreateWithoutTicketsInput, CustomerUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTicketsInput
    upsert?: CustomerUpsertWithoutTicketsInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutTicketsInput, CustomerUpdateWithoutTicketsInput>, CustomerUncheckedUpdateWithoutTicketsInput>
  }

  export type BrandUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<BrandCreateWithoutTicketsInput, BrandUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutTicketsInput
    upsert?: BrandUpsertWithoutTicketsInput
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutTicketsInput, BrandUpdateWithoutTicketsInput>, BrandUncheckedUpdateWithoutTicketsInput>
  }

  export type CategoryUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<CategoryCreateWithoutTicketsInput, CategoryUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTicketsInput
    upsert?: CategoryUpsertWithoutTicketsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutTicketsInput, CategoryUpdateWithoutTicketsInput>, CategoryUncheckedUpdateWithoutTicketsInput>
  }

  export type UserUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    upsert?: UserUpsertWithoutTicketsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTicketsInput, UserUpdateWithoutTicketsInput>, UserUncheckedUpdateWithoutTicketsInput>
  }

  export type PhotoUpdateManyWithoutTicketNestedInput = {
    create?: XOR<PhotoCreateWithoutTicketInput, PhotoUncheckedCreateWithoutTicketInput> | PhotoCreateWithoutTicketInput[] | PhotoUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutTicketInput | PhotoCreateOrConnectWithoutTicketInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutTicketInput | PhotoUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: PhotoCreateManyTicketInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutTicketInput | PhotoUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutTicketInput | PhotoUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type PhotoUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<PhotoCreateWithoutTicketInput, PhotoUncheckedCreateWithoutTicketInput> | PhotoCreateWithoutTicketInput[] | PhotoUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutTicketInput | PhotoCreateOrConnectWithoutTicketInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutTicketInput | PhotoUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: PhotoCreateManyTicketInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutTicketInput | PhotoUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutTicketInput | PhotoUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type TicketCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput> | TicketCreateWithoutCustomerInput[] | TicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCustomerInput | TicketCreateOrConnectWithoutCustomerInput[]
    createMany?: TicketCreateManyCustomerInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput> | TicketCreateWithoutCustomerInput[] | TicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCustomerInput | TicketCreateOrConnectWithoutCustomerInput[]
    createMany?: TicketCreateManyCustomerInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput> | TicketCreateWithoutCustomerInput[] | TicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCustomerInput | TicketCreateOrConnectWithoutCustomerInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCustomerInput | TicketUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TicketCreateManyCustomerInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCustomerInput | TicketUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCustomerInput | TicketUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput> | TicketCreateWithoutCustomerInput[] | TicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCustomerInput | TicketCreateOrConnectWithoutCustomerInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCustomerInput | TicketUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TicketCreateManyCustomerInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCustomerInput | TicketUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCustomerInput | TicketUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<TicketCreateWithoutTechnicianInput, TicketUncheckedCreateWithoutTechnicianInput> | TicketCreateWithoutTechnicianInput[] | TicketUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTechnicianInput | TicketCreateOrConnectWithoutTechnicianInput[]
    createMany?: TicketCreateManyTechnicianInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<TicketCreateWithoutTechnicianInput, TicketUncheckedCreateWithoutTechnicianInput> | TicketCreateWithoutTechnicianInput[] | TicketUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTechnicianInput | TicketCreateOrConnectWithoutTechnicianInput[]
    createMany?: TicketCreateManyTechnicianInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<TicketCreateWithoutTechnicianInput, TicketUncheckedCreateWithoutTechnicianInput> | TicketCreateWithoutTechnicianInput[] | TicketUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTechnicianInput | TicketCreateOrConnectWithoutTechnicianInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutTechnicianInput | TicketUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: TicketCreateManyTechnicianInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutTechnicianInput | TicketUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutTechnicianInput | TicketUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<TicketCreateWithoutTechnicianInput, TicketUncheckedCreateWithoutTechnicianInput> | TicketCreateWithoutTechnicianInput[] | TicketUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTechnicianInput | TicketCreateOrConnectWithoutTechnicianInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutTechnicianInput | TicketUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: TicketCreateManyTechnicianInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutTechnicianInput | TicketUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutTechnicianInput | TicketUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketCreateNestedOneWithoutPhotosInput = {
    create?: XOR<TicketCreateWithoutPhotosInput, TicketUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: TicketCreateOrConnectWithoutPhotosInput
    connect?: TicketWhereUniqueInput
  }

  export type TicketUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<TicketCreateWithoutPhotosInput, TicketUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: TicketCreateOrConnectWithoutPhotosInput
    upsert?: TicketUpsertWithoutPhotosInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutPhotosInput, TicketUpdateWithoutPhotosInput>, TicketUncheckedUpdateWithoutPhotosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TicketCreateWithoutBrandInput = {
    id?: string
    ticketNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    priority?: string
    cancellationReason?: string | null
    customerName: string
    customerPhone: string
    contactMethod?: string | null
    addressStreet?: string
    addressColony?: string
    addressZip?: string
    addressCity?: string
    propertyType?: string
    model?: string | null
    serialNumber?: string | null
    issueDescription: string
    triageData: string
    laborCost?: number
    partsCost?: number
    totalCost?: number
    invoiceUrl?: string | null
    signatureUrl?: string | null
    technicianNotes?: string | null
    isRepaired?: boolean
    invoiceName?: string | null
    invoiceTaxId?: string | null
    invoiceEmail?: string | null
    invoiceAddress?: string | null
    includeIva?: boolean
    appliedIvaPercentage?: number
    customer?: CustomerCreateNestedOneWithoutTicketsInput
    category: CategoryCreateNestedOneWithoutTicketsInput
    technician?: UserCreateNestedOneWithoutTicketsInput
    photos?: PhotoCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutBrandInput = {
    id?: string
    ticketNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    priority?: string
    cancellationReason?: string | null
    customerId?: string | null
    customerName: string
    customerPhone: string
    contactMethod?: string | null
    addressStreet?: string
    addressColony?: string
    addressZip?: string
    addressCity?: string
    propertyType?: string
    categoryId: number
    model?: string | null
    serialNumber?: string | null
    issueDescription: string
    triageData: string
    technicianId?: string | null
    laborCost?: number
    partsCost?: number
    totalCost?: number
    invoiceUrl?: string | null
    signatureUrl?: string | null
    technicianNotes?: string | null
    isRepaired?: boolean
    invoiceName?: string | null
    invoiceTaxId?: string | null
    invoiceEmail?: string | null
    invoiceAddress?: string | null
    includeIva?: boolean
    appliedIvaPercentage?: number
    photos?: PhotoUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutBrandInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutBrandInput, TicketUncheckedCreateWithoutBrandInput>
  }

  export type TicketCreateManyBrandInputEnvelope = {
    data: TicketCreateManyBrandInput | TicketCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type TicketUpsertWithWhereUniqueWithoutBrandInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutBrandInput, TicketUncheckedUpdateWithoutBrandInput>
    create: XOR<TicketCreateWithoutBrandInput, TicketUncheckedCreateWithoutBrandInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutBrandInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutBrandInput, TicketUncheckedUpdateWithoutBrandInput>
  }

  export type TicketUpdateManyWithWhereWithoutBrandInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutBrandInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: StringFilter<"Ticket"> | string
    ticketNumber?: IntFilter<"Ticket"> | number
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    status?: StringFilter<"Ticket"> | string
    priority?: StringFilter<"Ticket"> | string
    cancellationReason?: StringNullableFilter<"Ticket"> | string | null
    customerId?: StringNullableFilter<"Ticket"> | string | null
    customerName?: StringFilter<"Ticket"> | string
    customerPhone?: StringFilter<"Ticket"> | string
    contactMethod?: StringNullableFilter<"Ticket"> | string | null
    addressStreet?: StringFilter<"Ticket"> | string
    addressColony?: StringFilter<"Ticket"> | string
    addressZip?: StringFilter<"Ticket"> | string
    addressCity?: StringFilter<"Ticket"> | string
    propertyType?: StringFilter<"Ticket"> | string
    brandId?: IntFilter<"Ticket"> | number
    categoryId?: IntFilter<"Ticket"> | number
    model?: StringNullableFilter<"Ticket"> | string | null
    serialNumber?: StringNullableFilter<"Ticket"> | string | null
    issueDescription?: StringFilter<"Ticket"> | string
    triageData?: StringFilter<"Ticket"> | string
    technicianId?: StringNullableFilter<"Ticket"> | string | null
    laborCost?: FloatFilter<"Ticket"> | number
    partsCost?: FloatFilter<"Ticket"> | number
    totalCost?: FloatFilter<"Ticket"> | number
    invoiceUrl?: StringNullableFilter<"Ticket"> | string | null
    signatureUrl?: StringNullableFilter<"Ticket"> | string | null
    technicianNotes?: StringNullableFilter<"Ticket"> | string | null
    isRepaired?: BoolFilter<"Ticket"> | boolean
    invoiceName?: StringNullableFilter<"Ticket"> | string | null
    invoiceTaxId?: StringNullableFilter<"Ticket"> | string | null
    invoiceEmail?: StringNullableFilter<"Ticket"> | string | null
    invoiceAddress?: StringNullableFilter<"Ticket"> | string | null
    includeIva?: BoolFilter<"Ticket"> | boolean
    appliedIvaPercentage?: FloatFilter<"Ticket"> | number
  }

  export type TicketCreateWithoutCategoryInput = {
    id?: string
    ticketNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    priority?: string
    cancellationReason?: string | null
    customerName: string
    customerPhone: string
    contactMethod?: string | null
    addressStreet?: string
    addressColony?: string
    addressZip?: string
    addressCity?: string
    propertyType?: string
    model?: string | null
    serialNumber?: string | null
    issueDescription: string
    triageData: string
    laborCost?: number
    partsCost?: number
    totalCost?: number
    invoiceUrl?: string | null
    signatureUrl?: string | null
    technicianNotes?: string | null
    isRepaired?: boolean
    invoiceName?: string | null
    invoiceTaxId?: string | null
    invoiceEmail?: string | null
    invoiceAddress?: string | null
    includeIva?: boolean
    appliedIvaPercentage?: number
    customer?: CustomerCreateNestedOneWithoutTicketsInput
    brand: BrandCreateNestedOneWithoutTicketsInput
    technician?: UserCreateNestedOneWithoutTicketsInput
    photos?: PhotoCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutCategoryInput = {
    id?: string
    ticketNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    priority?: string
    cancellationReason?: string | null
    customerId?: string | null
    customerName: string
    customerPhone: string
    contactMethod?: string | null
    addressStreet?: string
    addressColony?: string
    addressZip?: string
    addressCity?: string
    propertyType?: string
    brandId: number
    model?: string | null
    serialNumber?: string | null
    issueDescription: string
    triageData: string
    technicianId?: string | null
    laborCost?: number
    partsCost?: number
    totalCost?: number
    invoiceUrl?: string | null
    signatureUrl?: string | null
    technicianNotes?: string | null
    isRepaired?: boolean
    invoiceName?: string | null
    invoiceTaxId?: string | null
    invoiceEmail?: string | null
    invoiceAddress?: string | null
    includeIva?: boolean
    appliedIvaPercentage?: number
    photos?: PhotoUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutCategoryInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutCategoryInput, TicketUncheckedCreateWithoutCategoryInput>
  }

  export type TicketCreateManyCategoryInputEnvelope = {
    data: TicketCreateManyCategoryInput | TicketCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type TicketUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutCategoryInput, TicketUncheckedUpdateWithoutCategoryInput>
    create: XOR<TicketCreateWithoutCategoryInput, TicketUncheckedCreateWithoutCategoryInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutCategoryInput, TicketUncheckedUpdateWithoutCategoryInput>
  }

  export type TicketUpdateManyWithWhereWithoutCategoryInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CustomerCreateWithoutTicketsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    documentNumber?: string | null
  }

  export type CustomerUncheckedCreateWithoutTicketsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    documentNumber?: string | null
  }

  export type CustomerCreateOrConnectWithoutTicketsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutTicketsInput, CustomerUncheckedCreateWithoutTicketsInput>
  }

  export type BrandCreateWithoutTicketsInput = {
    name: string
  }

  export type BrandUncheckedCreateWithoutTicketsInput = {
    id?: number
    name: string
  }

  export type BrandCreateOrConnectWithoutTicketsInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutTicketsInput, BrandUncheckedCreateWithoutTicketsInput>
  }

  export type CategoryCreateWithoutTicketsInput = {
    name: string
    slug: string
    prefix?: string
  }

  export type CategoryUncheckedCreateWithoutTicketsInput = {
    id?: number
    name: string
    slug: string
    prefix?: string
  }

  export type CategoryCreateOrConnectWithoutTicketsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutTicketsInput, CategoryUncheckedCreateWithoutTicketsInput>
  }

  export type UserCreateWithoutTicketsInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    phone?: string | null
    role?: string
  }

  export type UserUncheckedCreateWithoutTicketsInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    phone?: string | null
    role?: string
  }

  export type UserCreateOrConnectWithoutTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
  }

  export type PhotoCreateWithoutTicketInput = {
    id?: string
    url: string
    type: string
  }

  export type PhotoUncheckedCreateWithoutTicketInput = {
    id?: string
    url: string
    type: string
  }

  export type PhotoCreateOrConnectWithoutTicketInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutTicketInput, PhotoUncheckedCreateWithoutTicketInput>
  }

  export type PhotoCreateManyTicketInputEnvelope = {
    data: PhotoCreateManyTicketInput | PhotoCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutTicketsInput = {
    update: XOR<CustomerUpdateWithoutTicketsInput, CustomerUncheckedUpdateWithoutTicketsInput>
    create: XOR<CustomerCreateWithoutTicketsInput, CustomerUncheckedCreateWithoutTicketsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutTicketsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutTicketsInput, CustomerUncheckedUpdateWithoutTicketsInput>
  }

  export type CustomerUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BrandUpsertWithoutTicketsInput = {
    update: XOR<BrandUpdateWithoutTicketsInput, BrandUncheckedUpdateWithoutTicketsInput>
    create: XOR<BrandCreateWithoutTicketsInput, BrandUncheckedCreateWithoutTicketsInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutTicketsInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutTicketsInput, BrandUncheckedUpdateWithoutTicketsInput>
  }

  export type BrandUpdateWithoutTicketsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BrandUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUpsertWithoutTicketsInput = {
    update: XOR<CategoryUpdateWithoutTicketsInput, CategoryUncheckedUpdateWithoutTicketsInput>
    create: XOR<CategoryCreateWithoutTicketsInput, CategoryUncheckedCreateWithoutTicketsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutTicketsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutTicketsInput, CategoryUncheckedUpdateWithoutTicketsInput>
  }

  export type CategoryUpdateWithoutTicketsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutTicketsInput = {
    update: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
  }

  export type UserUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUpsertWithWhereUniqueWithoutTicketInput = {
    where: PhotoWhereUniqueInput
    update: XOR<PhotoUpdateWithoutTicketInput, PhotoUncheckedUpdateWithoutTicketInput>
    create: XOR<PhotoCreateWithoutTicketInput, PhotoUncheckedCreateWithoutTicketInput>
  }

  export type PhotoUpdateWithWhereUniqueWithoutTicketInput = {
    where: PhotoWhereUniqueInput
    data: XOR<PhotoUpdateWithoutTicketInput, PhotoUncheckedUpdateWithoutTicketInput>
  }

  export type PhotoUpdateManyWithWhereWithoutTicketInput = {
    where: PhotoScalarWhereInput
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyWithoutTicketInput>
  }

  export type PhotoScalarWhereInput = {
    AND?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    OR?: PhotoScalarWhereInput[]
    NOT?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    id?: StringFilter<"Photo"> | string
    url?: StringFilter<"Photo"> | string
    type?: StringFilter<"Photo"> | string
    ticketId?: StringFilter<"Photo"> | string
  }

  export type TicketCreateWithoutCustomerInput = {
    id?: string
    ticketNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    priority?: string
    cancellationReason?: string | null
    customerName: string
    customerPhone: string
    contactMethod?: string | null
    addressStreet?: string
    addressColony?: string
    addressZip?: string
    addressCity?: string
    propertyType?: string
    model?: string | null
    serialNumber?: string | null
    issueDescription: string
    triageData: string
    laborCost?: number
    partsCost?: number
    totalCost?: number
    invoiceUrl?: string | null
    signatureUrl?: string | null
    technicianNotes?: string | null
    isRepaired?: boolean
    invoiceName?: string | null
    invoiceTaxId?: string | null
    invoiceEmail?: string | null
    invoiceAddress?: string | null
    includeIva?: boolean
    appliedIvaPercentage?: number
    brand: BrandCreateNestedOneWithoutTicketsInput
    category: CategoryCreateNestedOneWithoutTicketsInput
    technician?: UserCreateNestedOneWithoutTicketsInput
    photos?: PhotoCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutCustomerInput = {
    id?: string
    ticketNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    priority?: string
    cancellationReason?: string | null
    customerName: string
    customerPhone: string
    contactMethod?: string | null
    addressStreet?: string
    addressColony?: string
    addressZip?: string
    addressCity?: string
    propertyType?: string
    brandId: number
    categoryId: number
    model?: string | null
    serialNumber?: string | null
    issueDescription: string
    triageData: string
    technicianId?: string | null
    laborCost?: number
    partsCost?: number
    totalCost?: number
    invoiceUrl?: string | null
    signatureUrl?: string | null
    technicianNotes?: string | null
    isRepaired?: boolean
    invoiceName?: string | null
    invoiceTaxId?: string | null
    invoiceEmail?: string | null
    invoiceAddress?: string | null
    includeIva?: boolean
    appliedIvaPercentage?: number
    photos?: PhotoUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutCustomerInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput>
  }

  export type TicketCreateManyCustomerInputEnvelope = {
    data: TicketCreateManyCustomerInput | TicketCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type TicketUpsertWithWhereUniqueWithoutCustomerInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutCustomerInput, TicketUncheckedUpdateWithoutCustomerInput>
    create: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutCustomerInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutCustomerInput, TicketUncheckedUpdateWithoutCustomerInput>
  }

  export type TicketUpdateManyWithWhereWithoutCustomerInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutCustomerInput>
  }

  export type TicketCreateWithoutTechnicianInput = {
    id?: string
    ticketNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    priority?: string
    cancellationReason?: string | null
    customerName: string
    customerPhone: string
    contactMethod?: string | null
    addressStreet?: string
    addressColony?: string
    addressZip?: string
    addressCity?: string
    propertyType?: string
    model?: string | null
    serialNumber?: string | null
    issueDescription: string
    triageData: string
    laborCost?: number
    partsCost?: number
    totalCost?: number
    invoiceUrl?: string | null
    signatureUrl?: string | null
    technicianNotes?: string | null
    isRepaired?: boolean
    invoiceName?: string | null
    invoiceTaxId?: string | null
    invoiceEmail?: string | null
    invoiceAddress?: string | null
    includeIva?: boolean
    appliedIvaPercentage?: number
    customer?: CustomerCreateNestedOneWithoutTicketsInput
    brand: BrandCreateNestedOneWithoutTicketsInput
    category: CategoryCreateNestedOneWithoutTicketsInput
    photos?: PhotoCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutTechnicianInput = {
    id?: string
    ticketNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    priority?: string
    cancellationReason?: string | null
    customerId?: string | null
    customerName: string
    customerPhone: string
    contactMethod?: string | null
    addressStreet?: string
    addressColony?: string
    addressZip?: string
    addressCity?: string
    propertyType?: string
    brandId: number
    categoryId: number
    model?: string | null
    serialNumber?: string | null
    issueDescription: string
    triageData: string
    laborCost?: number
    partsCost?: number
    totalCost?: number
    invoiceUrl?: string | null
    signatureUrl?: string | null
    technicianNotes?: string | null
    isRepaired?: boolean
    invoiceName?: string | null
    invoiceTaxId?: string | null
    invoiceEmail?: string | null
    invoiceAddress?: string | null
    includeIva?: boolean
    appliedIvaPercentage?: number
    photos?: PhotoUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutTechnicianInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutTechnicianInput, TicketUncheckedCreateWithoutTechnicianInput>
  }

  export type TicketCreateManyTechnicianInputEnvelope = {
    data: TicketCreateManyTechnicianInput | TicketCreateManyTechnicianInput[]
    skipDuplicates?: boolean
  }

  export type TicketUpsertWithWhereUniqueWithoutTechnicianInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutTechnicianInput, TicketUncheckedUpdateWithoutTechnicianInput>
    create: XOR<TicketCreateWithoutTechnicianInput, TicketUncheckedCreateWithoutTechnicianInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutTechnicianInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutTechnicianInput, TicketUncheckedUpdateWithoutTechnicianInput>
  }

  export type TicketUpdateManyWithWhereWithoutTechnicianInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutTechnicianInput>
  }

  export type TicketCreateWithoutPhotosInput = {
    id?: string
    ticketNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    priority?: string
    cancellationReason?: string | null
    customerName: string
    customerPhone: string
    contactMethod?: string | null
    addressStreet?: string
    addressColony?: string
    addressZip?: string
    addressCity?: string
    propertyType?: string
    model?: string | null
    serialNumber?: string | null
    issueDescription: string
    triageData: string
    laborCost?: number
    partsCost?: number
    totalCost?: number
    invoiceUrl?: string | null
    signatureUrl?: string | null
    technicianNotes?: string | null
    isRepaired?: boolean
    invoiceName?: string | null
    invoiceTaxId?: string | null
    invoiceEmail?: string | null
    invoiceAddress?: string | null
    includeIva?: boolean
    appliedIvaPercentage?: number
    customer?: CustomerCreateNestedOneWithoutTicketsInput
    brand: BrandCreateNestedOneWithoutTicketsInput
    category: CategoryCreateNestedOneWithoutTicketsInput
    technician?: UserCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutPhotosInput = {
    id?: string
    ticketNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    priority?: string
    cancellationReason?: string | null
    customerId?: string | null
    customerName: string
    customerPhone: string
    contactMethod?: string | null
    addressStreet?: string
    addressColony?: string
    addressZip?: string
    addressCity?: string
    propertyType?: string
    brandId: number
    categoryId: number
    model?: string | null
    serialNumber?: string | null
    issueDescription: string
    triageData: string
    technicianId?: string | null
    laborCost?: number
    partsCost?: number
    totalCost?: number
    invoiceUrl?: string | null
    signatureUrl?: string | null
    technicianNotes?: string | null
    isRepaired?: boolean
    invoiceName?: string | null
    invoiceTaxId?: string | null
    invoiceEmail?: string | null
    invoiceAddress?: string | null
    includeIva?: boolean
    appliedIvaPercentage?: number
  }

  export type TicketCreateOrConnectWithoutPhotosInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutPhotosInput, TicketUncheckedCreateWithoutPhotosInput>
  }

  export type TicketUpsertWithoutPhotosInput = {
    update: XOR<TicketUpdateWithoutPhotosInput, TicketUncheckedUpdateWithoutPhotosInput>
    create: XOR<TicketCreateWithoutPhotosInput, TicketUncheckedCreateWithoutPhotosInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutPhotosInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutPhotosInput, TicketUncheckedUpdateWithoutPhotosInput>
  }

  export type TicketUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    contactMethod?: NullableStringFieldUpdateOperationsInput | string | null
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressColony?: StringFieldUpdateOperationsInput | string
    addressZip?: StringFieldUpdateOperationsInput | string
    addressCity?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDescription?: StringFieldUpdateOperationsInput | string
    triageData?: StringFieldUpdateOperationsInput | string
    laborCost?: FloatFieldUpdateOperationsInput | number
    partsCost?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepaired?: BoolFieldUpdateOperationsInput | boolean
    invoiceName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    includeIva?: BoolFieldUpdateOperationsInput | boolean
    appliedIvaPercentage?: FloatFieldUpdateOperationsInput | number
    customer?: CustomerUpdateOneWithoutTicketsNestedInput
    brand?: BrandUpdateOneRequiredWithoutTicketsNestedInput
    category?: CategoryUpdateOneRequiredWithoutTicketsNestedInput
    technician?: UserUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    contactMethod?: NullableStringFieldUpdateOperationsInput | string | null
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressColony?: StringFieldUpdateOperationsInput | string
    addressZip?: StringFieldUpdateOperationsInput | string
    addressCity?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDescription?: StringFieldUpdateOperationsInput | string
    triageData?: StringFieldUpdateOperationsInput | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    laborCost?: FloatFieldUpdateOperationsInput | number
    partsCost?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepaired?: BoolFieldUpdateOperationsInput | boolean
    invoiceName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    includeIva?: BoolFieldUpdateOperationsInput | boolean
    appliedIvaPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type TicketCreateManyBrandInput = {
    id?: string
    ticketNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    priority?: string
    cancellationReason?: string | null
    customerId?: string | null
    customerName: string
    customerPhone: string
    contactMethod?: string | null
    addressStreet?: string
    addressColony?: string
    addressZip?: string
    addressCity?: string
    propertyType?: string
    categoryId: number
    model?: string | null
    serialNumber?: string | null
    issueDescription: string
    triageData: string
    technicianId?: string | null
    laborCost?: number
    partsCost?: number
    totalCost?: number
    invoiceUrl?: string | null
    signatureUrl?: string | null
    technicianNotes?: string | null
    isRepaired?: boolean
    invoiceName?: string | null
    invoiceTaxId?: string | null
    invoiceEmail?: string | null
    invoiceAddress?: string | null
    includeIva?: boolean
    appliedIvaPercentage?: number
  }

  export type TicketUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    contactMethod?: NullableStringFieldUpdateOperationsInput | string | null
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressColony?: StringFieldUpdateOperationsInput | string
    addressZip?: StringFieldUpdateOperationsInput | string
    addressCity?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDescription?: StringFieldUpdateOperationsInput | string
    triageData?: StringFieldUpdateOperationsInput | string
    laborCost?: FloatFieldUpdateOperationsInput | number
    partsCost?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepaired?: BoolFieldUpdateOperationsInput | boolean
    invoiceName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    includeIva?: BoolFieldUpdateOperationsInput | boolean
    appliedIvaPercentage?: FloatFieldUpdateOperationsInput | number
    customer?: CustomerUpdateOneWithoutTicketsNestedInput
    category?: CategoryUpdateOneRequiredWithoutTicketsNestedInput
    technician?: UserUpdateOneWithoutTicketsNestedInput
    photos?: PhotoUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    contactMethod?: NullableStringFieldUpdateOperationsInput | string | null
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressColony?: StringFieldUpdateOperationsInput | string
    addressZip?: StringFieldUpdateOperationsInput | string
    addressCity?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDescription?: StringFieldUpdateOperationsInput | string
    triageData?: StringFieldUpdateOperationsInput | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    laborCost?: FloatFieldUpdateOperationsInput | number
    partsCost?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepaired?: BoolFieldUpdateOperationsInput | boolean
    invoiceName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    includeIva?: BoolFieldUpdateOperationsInput | boolean
    appliedIvaPercentage?: FloatFieldUpdateOperationsInput | number
    photos?: PhotoUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    contactMethod?: NullableStringFieldUpdateOperationsInput | string | null
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressColony?: StringFieldUpdateOperationsInput | string
    addressZip?: StringFieldUpdateOperationsInput | string
    addressCity?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDescription?: StringFieldUpdateOperationsInput | string
    triageData?: StringFieldUpdateOperationsInput | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    laborCost?: FloatFieldUpdateOperationsInput | number
    partsCost?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepaired?: BoolFieldUpdateOperationsInput | boolean
    invoiceName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    includeIva?: BoolFieldUpdateOperationsInput | boolean
    appliedIvaPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type TicketCreateManyCategoryInput = {
    id?: string
    ticketNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    priority?: string
    cancellationReason?: string | null
    customerId?: string | null
    customerName: string
    customerPhone: string
    contactMethod?: string | null
    addressStreet?: string
    addressColony?: string
    addressZip?: string
    addressCity?: string
    propertyType?: string
    brandId: number
    model?: string | null
    serialNumber?: string | null
    issueDescription: string
    triageData: string
    technicianId?: string | null
    laborCost?: number
    partsCost?: number
    totalCost?: number
    invoiceUrl?: string | null
    signatureUrl?: string | null
    technicianNotes?: string | null
    isRepaired?: boolean
    invoiceName?: string | null
    invoiceTaxId?: string | null
    invoiceEmail?: string | null
    invoiceAddress?: string | null
    includeIva?: boolean
    appliedIvaPercentage?: number
  }

  export type TicketUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    contactMethod?: NullableStringFieldUpdateOperationsInput | string | null
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressColony?: StringFieldUpdateOperationsInput | string
    addressZip?: StringFieldUpdateOperationsInput | string
    addressCity?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDescription?: StringFieldUpdateOperationsInput | string
    triageData?: StringFieldUpdateOperationsInput | string
    laborCost?: FloatFieldUpdateOperationsInput | number
    partsCost?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepaired?: BoolFieldUpdateOperationsInput | boolean
    invoiceName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    includeIva?: BoolFieldUpdateOperationsInput | boolean
    appliedIvaPercentage?: FloatFieldUpdateOperationsInput | number
    customer?: CustomerUpdateOneWithoutTicketsNestedInput
    brand?: BrandUpdateOneRequiredWithoutTicketsNestedInput
    technician?: UserUpdateOneWithoutTicketsNestedInput
    photos?: PhotoUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    contactMethod?: NullableStringFieldUpdateOperationsInput | string | null
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressColony?: StringFieldUpdateOperationsInput | string
    addressZip?: StringFieldUpdateOperationsInput | string
    addressCity?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDescription?: StringFieldUpdateOperationsInput | string
    triageData?: StringFieldUpdateOperationsInput | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    laborCost?: FloatFieldUpdateOperationsInput | number
    partsCost?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepaired?: BoolFieldUpdateOperationsInput | boolean
    invoiceName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    includeIva?: BoolFieldUpdateOperationsInput | boolean
    appliedIvaPercentage?: FloatFieldUpdateOperationsInput | number
    photos?: PhotoUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    contactMethod?: NullableStringFieldUpdateOperationsInput | string | null
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressColony?: StringFieldUpdateOperationsInput | string
    addressZip?: StringFieldUpdateOperationsInput | string
    addressCity?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDescription?: StringFieldUpdateOperationsInput | string
    triageData?: StringFieldUpdateOperationsInput | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    laborCost?: FloatFieldUpdateOperationsInput | number
    partsCost?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepaired?: BoolFieldUpdateOperationsInput | boolean
    invoiceName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    includeIva?: BoolFieldUpdateOperationsInput | boolean
    appliedIvaPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type PhotoCreateManyTicketInput = {
    id?: string
    url: string
    type: string
  }

  export type PhotoUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUncheckedUpdateManyWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TicketCreateManyCustomerInput = {
    id?: string
    ticketNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    priority?: string
    cancellationReason?: string | null
    customerName: string
    customerPhone: string
    contactMethod?: string | null
    addressStreet?: string
    addressColony?: string
    addressZip?: string
    addressCity?: string
    propertyType?: string
    brandId: number
    categoryId: number
    model?: string | null
    serialNumber?: string | null
    issueDescription: string
    triageData: string
    technicianId?: string | null
    laborCost?: number
    partsCost?: number
    totalCost?: number
    invoiceUrl?: string | null
    signatureUrl?: string | null
    technicianNotes?: string | null
    isRepaired?: boolean
    invoiceName?: string | null
    invoiceTaxId?: string | null
    invoiceEmail?: string | null
    invoiceAddress?: string | null
    includeIva?: boolean
    appliedIvaPercentage?: number
  }

  export type TicketUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    contactMethod?: NullableStringFieldUpdateOperationsInput | string | null
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressColony?: StringFieldUpdateOperationsInput | string
    addressZip?: StringFieldUpdateOperationsInput | string
    addressCity?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDescription?: StringFieldUpdateOperationsInput | string
    triageData?: StringFieldUpdateOperationsInput | string
    laborCost?: FloatFieldUpdateOperationsInput | number
    partsCost?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepaired?: BoolFieldUpdateOperationsInput | boolean
    invoiceName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    includeIva?: BoolFieldUpdateOperationsInput | boolean
    appliedIvaPercentage?: FloatFieldUpdateOperationsInput | number
    brand?: BrandUpdateOneRequiredWithoutTicketsNestedInput
    category?: CategoryUpdateOneRequiredWithoutTicketsNestedInput
    technician?: UserUpdateOneWithoutTicketsNestedInput
    photos?: PhotoUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    contactMethod?: NullableStringFieldUpdateOperationsInput | string | null
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressColony?: StringFieldUpdateOperationsInput | string
    addressZip?: StringFieldUpdateOperationsInput | string
    addressCity?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDescription?: StringFieldUpdateOperationsInput | string
    triageData?: StringFieldUpdateOperationsInput | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    laborCost?: FloatFieldUpdateOperationsInput | number
    partsCost?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepaired?: BoolFieldUpdateOperationsInput | boolean
    invoiceName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    includeIva?: BoolFieldUpdateOperationsInput | boolean
    appliedIvaPercentage?: FloatFieldUpdateOperationsInput | number
    photos?: PhotoUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    contactMethod?: NullableStringFieldUpdateOperationsInput | string | null
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressColony?: StringFieldUpdateOperationsInput | string
    addressZip?: StringFieldUpdateOperationsInput | string
    addressCity?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDescription?: StringFieldUpdateOperationsInput | string
    triageData?: StringFieldUpdateOperationsInput | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    laborCost?: FloatFieldUpdateOperationsInput | number
    partsCost?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepaired?: BoolFieldUpdateOperationsInput | boolean
    invoiceName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    includeIva?: BoolFieldUpdateOperationsInput | boolean
    appliedIvaPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type TicketCreateManyTechnicianInput = {
    id?: string
    ticketNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    priority?: string
    cancellationReason?: string | null
    customerId?: string | null
    customerName: string
    customerPhone: string
    contactMethod?: string | null
    addressStreet?: string
    addressColony?: string
    addressZip?: string
    addressCity?: string
    propertyType?: string
    brandId: number
    categoryId: number
    model?: string | null
    serialNumber?: string | null
    issueDescription: string
    triageData: string
    laborCost?: number
    partsCost?: number
    totalCost?: number
    invoiceUrl?: string | null
    signatureUrl?: string | null
    technicianNotes?: string | null
    isRepaired?: boolean
    invoiceName?: string | null
    invoiceTaxId?: string | null
    invoiceEmail?: string | null
    invoiceAddress?: string | null
    includeIva?: boolean
    appliedIvaPercentage?: number
  }

  export type TicketUpdateWithoutTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    contactMethod?: NullableStringFieldUpdateOperationsInput | string | null
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressColony?: StringFieldUpdateOperationsInput | string
    addressZip?: StringFieldUpdateOperationsInput | string
    addressCity?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDescription?: StringFieldUpdateOperationsInput | string
    triageData?: StringFieldUpdateOperationsInput | string
    laborCost?: FloatFieldUpdateOperationsInput | number
    partsCost?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepaired?: BoolFieldUpdateOperationsInput | boolean
    invoiceName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    includeIva?: BoolFieldUpdateOperationsInput | boolean
    appliedIvaPercentage?: FloatFieldUpdateOperationsInput | number
    customer?: CustomerUpdateOneWithoutTicketsNestedInput
    brand?: BrandUpdateOneRequiredWithoutTicketsNestedInput
    category?: CategoryUpdateOneRequiredWithoutTicketsNestedInput
    photos?: PhotoUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    contactMethod?: NullableStringFieldUpdateOperationsInput | string | null
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressColony?: StringFieldUpdateOperationsInput | string
    addressZip?: StringFieldUpdateOperationsInput | string
    addressCity?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDescription?: StringFieldUpdateOperationsInput | string
    triageData?: StringFieldUpdateOperationsInput | string
    laborCost?: FloatFieldUpdateOperationsInput | number
    partsCost?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepaired?: BoolFieldUpdateOperationsInput | boolean
    invoiceName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    includeIva?: BoolFieldUpdateOperationsInput | boolean
    appliedIvaPercentage?: FloatFieldUpdateOperationsInput | number
    photos?: PhotoUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    contactMethod?: NullableStringFieldUpdateOperationsInput | string | null
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressColony?: StringFieldUpdateOperationsInput | string
    addressZip?: StringFieldUpdateOperationsInput | string
    addressCity?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDescription?: StringFieldUpdateOperationsInput | string
    triageData?: StringFieldUpdateOperationsInput | string
    laborCost?: FloatFieldUpdateOperationsInput | number
    partsCost?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signatureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepaired?: BoolFieldUpdateOperationsInput | boolean
    invoiceName?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceAddress?: NullableStringFieldUpdateOperationsInput | string | null
    includeIva?: BoolFieldUpdateOperationsInput | boolean
    appliedIvaPercentage?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use BrandCountOutputTypeDefaultArgs instead
     */
    export type BrandCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BrandCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TicketCountOutputTypeDefaultArgs instead
     */
    export type TicketCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TicketCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerCountOutputTypeDefaultArgs instead
     */
    export type CustomerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BrandDefaultArgs instead
     */
    export type BrandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BrandDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TicketDefaultArgs instead
     */
    export type TicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TicketDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerDefaultArgs instead
     */
    export type CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PhotoDefaultArgs instead
     */
    export type PhotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PhotoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SparePartDefaultArgs instead
     */
    export type SparePartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SparePartDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanySettingsDefaultArgs instead
     */
    export type CompanySettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanySettingsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}