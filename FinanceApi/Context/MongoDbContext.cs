using FinanceApi.Models;
using MongoDB.Driver;
using MongoDB.Driver.Linq;

namespace FinanceApi.Context
{
    namespace FinanceApi.Context
    {
        public class MongoDbContext<T> : IMongoDbContext<T> where T : BaseModel
        {
            public MongoDbContext()
            {
                var client = new MongoClient("mongodb://localhost:27017");
                _database = client.GetDatabase("FinanceWebDb");
            }

            private readonly IMongoDatabase _database;

            private IMongoCollection<T> MongoCollection
            {
                get => _database.GetCollection<T>($"{typeof(T).Name}");
            }

            public IMongoQueryable<T> Query => MongoCollection.AsQueryable();

            public async Task<List<T>> GetAllAsync(Guid userId, CancellationToken cancellation)
            {
                return await Query
                    .Where(w => w.UserId == userId)
                    .ToListAsync(cancellation);
            }

            public async Task<T> GetAsync(Guid id, CancellationToken cancellation)
            {
                return await Query.Where(x => x.Id == id).SingleOrDefaultAsync(cancellation);
            }

            public async Task InsertAsync(T model, CancellationToken cancellation)
            {
                await MongoCollection.InsertOneAsync(model, null, cancellation);
            }

            public async Task UpdateAsync(T model, CancellationToken cancellation)
            {
                await MongoCollection.ReplaceOneAsync(w => w.Id == model.Id, model, cancellationToken: cancellation);
            }

            public async Task RemoveAsync(Guid id, CancellationToken cancellation)
            {
                await MongoCollection.DeleteOneAsync(w => w.Id == id, cancellation);
            }
        }
    }
}
