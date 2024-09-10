using FinanceApi.Context;
using FinanceApi.Models;
using FinanceApi.Repositories.Interfaces;

namespace FinanceApi.Repositories.Implementations
{
    public class CadContaRepository : ICadContaRepository
    {
        private readonly IMongoDbContext<CadConta> _context;

        public CadContaRepository(IMongoDbContext<CadConta> context)
        {
            _context = context;
        }

        public async Task<CadConta> GetByIdAsync(Guid id, CancellationToken cancellation)
        {
            return await _context.GetAsync(id, cancellation);
        }

        public async Task<List<CadConta>> GetAllAsync(CancellationToken cancellation)
        {
            return await _context.GetAllAsync(cancellation);
        }

        public async Task CreateAsync(CadConta cadConta, CancellationToken cancellation)
        {
            await _context.InsertAsync(cadConta, cancellation);
        }

        public async Task UpdateAsync(CadConta cadConta, CancellationToken cancellation)
        {
            await _context.UpdateAsync(cadConta, cancellation);
        }

        public async Task RemoveAsync(Guid id, CancellationToken cancellation)
        {
            await _context.RemoveAsync(id, cancellation);
        }
    }
}
