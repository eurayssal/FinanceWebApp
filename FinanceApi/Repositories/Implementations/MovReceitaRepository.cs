using FinanceApi.Context;
using FinanceApi.Models;
using FinanceApi.Repositories.Interfaces;

namespace FinanceApi.Repositories.Implementations
{
    public class MovReceitaRepository : IMovReceitaRepository
    {
        private readonly IMongoDbContext<MovReceita> _context;

        public MovReceitaRepository(IMongoDbContext<MovReceita> context)
        {
            _context = context;
        }

        public async Task<MovReceita> GetByIdAsync(Guid id, CancellationToken cancellation)
        {
            return await _context.GetAsync(id, cancellation);
        }

        public async Task<List<MovReceita>> GetAllAsync(CancellationToken cancellation)
        {
            return await _context.GetAllAsync(cancellation);
        }

        public async Task CreateAsync(MovReceita movReceita, CancellationToken cancellation)
        {
            await _context.InsertAsync(movReceita, cancellation);
        }

        public async Task UpdateAsync(MovReceita movReceita, CancellationToken cancellation)
        {
            await _context.UpdateAsync(movReceita, cancellation);
        }

        public async Task RemoveAsync(Guid id, CancellationToken cancellation)
        {
            await _context.RemoveAsync(id, cancellation);
        }
    }
}
