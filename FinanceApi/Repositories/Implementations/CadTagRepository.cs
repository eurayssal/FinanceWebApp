﻿using FinanceApi.Context;
using FinanceApi.Models;
using FinanceApi.Repositories.Interface;

namespace FinanceApi.Repositories.Implementation
{
    public class CadTagRepository : ICadTagRepository
    {

        private readonly IMongoDbContext<CadTag> _context;
        public CadTagRepository(IMongoDbContext<CadTag> context)
        {
            _context = context;
        }

        public async Task<CadTag> GetAsync(Guid id, CancellationToken cancellation)
        {
            return await _context.GetAsync(id, cancellation);
        }

        public async Task<List<CadTag>> GetAllAsync(CancellationToken cancellation)
        {
            return await _context.GetAllAsync(cancellation);
        }

        public async Task InsertAsync(CadTag cadTag, CancellationToken cancellation)
        {
            await _context.InsertAsync(cadTag, cancellation);
        }

        public async Task UpdateAsync(CadTag cadTag, CancellationToken cancellation)
        {
            await _context.UpdateAsync(cadTag, cancellation);
        }

        public async Task DeleteAsync(Guid id, CancellationToken cancellation)
        {
            await _context.DeleteAsync(id, cancellation);
        }
    }
}