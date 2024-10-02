﻿using FinanceApi.Context.FinanceApi.Context;
using FinanceApi.Models;
using FinanceApi.Repositories.Interfaces;

namespace FinanceApi.Repositories.Implementations
{
    public class MovTransferenciaRepository : MongoDbContext<MovTransferencia>, IMovTransferenciaRepository
    {
    }
}