using FinanceApi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace FinanceApi.Services
{
    public class CadTagService
    {
        private readonly IMongoCollection<CadTag> _tagsCollection;

        public CadTagService(IOptions<FinanceDatabaseSettings> financeDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                financeDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
               financeDatabaseSettings.Value.DatabaseName);

            _tagsCollection = mongoDatabase.GetCollection<CadTag>("cadtag");
        }

        public async Task<List<CadTag>> GetAsync() =>
          await _tagsCollection.Find(x => true).ToListAsync();

        public async Task<CadTag> GetAsync(string id) =>
            await _tagsCollection.Find(y => y.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(CadTag newCadTag)
        {
            await _tagsCollection.InsertOneAsync(newCadTag);
        }

        public async Task UpdateAsync(string id, CadTag updatedCadCartao) =>
      await _tagsCollection.ReplaceOneAsync(x => x.Id == id, updatedCadCartao);

        public async Task RemoveAsync(string id) =>
            await _tagsCollection.DeleteOneAsync(x => x.Id == id);
    }
}
