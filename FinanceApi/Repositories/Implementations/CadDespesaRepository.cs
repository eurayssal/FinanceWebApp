using FinanceApi.Context;
using FinanceApi.Models;
using FinanceApi.Repositories.Interfaces;

namespace FinanceApi.Repositories
{
    public class CadDespesaRepository : ICadDespesaRepository
    {
        private readonly IMongoDbContext<CadDespesa> _context;

        public CadDespesaRepository(IMongoDbContext<CadDespesa> context)
        {
            _context = context;
        }

        public async Task<List<CadDespesa>> GetAllAsync(CancellationToken cancellation)
        {
            return await _context.GetAllAsync(cancellation);
        }

        public async Task<CadDespesa> GetAsync(Guid id, CancellationToken cancellation)
        {
            return await _context.GetAsync(id, cancellation);
        }

        public async Task InsertAsync(CadDespesa cadDespesa, CancellationToken cancellation)
        {
            await _context.InsertAsync(cadDespesa, cancellation);
        }

        public async Task UpdateAsync(CadDespesa cadDespesa, CancellationToken cancellation)
        {
            await _context.UpdateAsync(cadDespesa, cancellation);
        }

        public async Task DeleteAsync(Guid id, CancellationToken cancellation)
        {
            await _context.DeleteAsync(id, cancellation);
        }
    }
}
