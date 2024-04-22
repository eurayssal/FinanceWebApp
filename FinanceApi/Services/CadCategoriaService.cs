using FinanceApi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace FinanceApi.Services
{
    public class CadCategoriaService
    {
        private readonly IMongoCollection<CadCategoria> _cadCategoriaCollection;

        public CadCategoriaService (IOptions<FinanceDatabaseSettings> fiananceDatabaseSettings)
        {
            var mongoClient = new MongoClient (
                fiananceDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                fiananceDatabaseSettings.Value.DatabaseName);

            _cadCategoriaCollection = mongoDatabase.GetCollection<CadCategoria>("cadcategoria");
        }


        public async Task<List<CadCategoria>> GetAsync() =>
            await _cadCategoriaCollection.Find(_=> true).ToListAsync();

        public async Task<CadCategoria> GetAsync(string id) =>
            await _cadCategoriaCollection.Find(y => y.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(CadCategoria newCadCategoria) =>
            await _cadCategoriaCollection.InsertOneAsync(newCadCategoria);

        public async Task UpdateAsync(string id, CadCategoria updateCategoria) =>
            await _cadCategoriaCollection.ReplaceOneAsync(x => x.Id == id, updateCategoria);

        public async Task RemoveAsync(string id) =>
            await _cadCategoriaCollection.DeleteOneAsync(x => x.Id == id);
    }
}
