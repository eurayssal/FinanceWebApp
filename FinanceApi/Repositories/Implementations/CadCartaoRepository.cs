using FinanceApi.Context;
using FinanceApi.Models;
using FinanceApi.Repositories.Interfaces;

namespace FinanceApi.Repositories.Implementations
{
    public class CadCartaoRepository : ICadCartaoRepository
    {
        private readonly IMongoDbContext<CadCartao> _context;

        public CadCartaoRepository(IMongoDbContext<CadCartao> context)
        {
            _context = context;
        }

        public async Task<CadCartao> GetByIdAsync(Guid id, CancellationToken cancellation)
        {
            return await _context.GetAsync(id, cancellation);
        }

        public async Task<List<CadCartao>> GetAllAsync(CancellationToken cancellation)
        {
            return await _context.GetAllAsync(cancellation);
        }

        public async Task CreateAsync(CadCartao cadCatao, CancellationToken cancellation)
        {
            await _context.InsertAsync(cadCatao, cancellation);
        }

        public async Task UpdateAsync(CadCartao cadCartao, CancellationToken cancellation)
        {
            await _context.UpdateAsync(cadCartao, cancellation);
        }

        public async Task RemoveAsync(Guid id, CancellationToken cancellation)
        {
            await _context.RemoveAsync(id, cancellation);
        }
    }
}
