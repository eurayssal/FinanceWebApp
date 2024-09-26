using FinanceApi.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FinanceApi.Controllers.MovTransferencia
{
    [ApiController]
    [Route("api/receita")]
    public class MovTransferenciaController(ICadContaRepository contaRepository) : ControllerBase
    {
        private readonly ICadContaRepository _repository = contaRepository;

        [HttpGet]
        public async Task<IActionResult> GetAllAsync(CancellationToken cancellation)
        {
            var movTransferencia = await _repository.GetAllAsync(cancellation);
            return Ok(movTransferencia);
        }

        [HttpGet, Route("{id}")]
        public async Task<IActionResult> GetAsync(Guid id, CancellationToken cancellation)
        {
            var movTransferencia = await _repository.GetAsync(id, cancellation);
            return Ok(movTransferencia);
        }

        //[HttpPost, Route("create")]
        //public async Task<IActionResult> PostAsync(CadContaViewModel contaSaida, CadContaViewModel contaEntrada)
        //{

        //}
    }
}
