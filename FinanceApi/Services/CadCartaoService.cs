using FinanceApi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace FinanceApi.Services
{
    public class CadCartaoService
    {
        private readonly IMongoCollection<CadCartao> _cadCartaoCollection;

        public CadCartaoService(IOptions<FinanceDatabaseSettings> financeDatabaseSettings)
        {
            var mongoClient = new MongoClient(
               financeDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                financeDatabaseSettings.Value.DatabaseName);

            _cadCartaoCollection = mongoDatabase.GetCollection<CadCartao>("cadcartao");
        }

        public async Task<List<CadCartao>> GetAsync() =>
            await _cadCartaoCollection.Find(_ => true).ToListAsync();

        public async Task<CadCartao?> GetAsync(string id) =>
            await _cadCartaoCollection.Find(y => y.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(CadCartao newCadCartao)
        {
            await _cadCartaoCollection.InsertOneAsync(newCadCartao);
        }

        public async Task UpdateAsync(string id, CadCartao updatedCadCartao) =>
      await _cadCartaoCollection.ReplaceOneAsync(x => x.Id == id, updatedCadCartao);

        public async Task RemoveAsync(string id) =>
            await _cadCartaoCollection.DeleteOneAsync(x => x.Id == id);
    }
}
