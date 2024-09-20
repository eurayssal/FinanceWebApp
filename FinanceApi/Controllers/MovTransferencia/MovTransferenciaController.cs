using FinanceApi.Controllers.CadConta;
using FinanceApi.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FinanceApi.Controllers.MovTransferencia
{
    [ApiController]
    [Route("api/receita")]
    public class MovTransferenciaController(ICadContaRepository contaRepository) : ControllerBase
    {
        private readonly ICadContaRepository _contaRepository = contaRepository;

        [HttpPost, Route("create")]
        public async Task<IActionResult> PostAsync(CadContaViewModel contaSaida, CadContaViewModel contaEntrada)
        {

        }
    }
}
