using FinanceApi.Context;
using FinanceApi.Models;
using FinanceApi.Repositories.Interfaces;

namespace FinanceApi.Repositories.Implementations
{
    public class MovDespesaRepository : IMovDespesaRepository
    {
        private readonly IMongoDbContext<MovDespesa> _context;

        public MovDespesaRepository(IMongoDbContext<MovDespesa> context)
        {
            _context = context;
        }

        public async Task<MovDespesa> GetAsync(Guid id, CancellationToken cancellation)
        {
            return await _context.GetAsync(id, cancellation);
        }

        public async Task<List<MovDespesa>> GetAllAsync(CancellationToken cancellation)
        {
            return await _context.GetAllAsync(cancellation);
        }

        public async Task CreateAsync(MovDespesa movDespesa, CancellationToken cancellation)
        {
            await _context.InsertAsync(movDespesa, cancellation);
        }

        public async Task UpdateAsync(MovDespesa movDespesa, CancellationToken cancellation)
        {
            await _context.UpdateAsync(movDespesa, cancellation);
        }

        public async Task RemoveAsync(Guid id, CancellationToken cancellation)
        {
            await _context.DeleteAsync(id, cancellation);
        }
    }
}
