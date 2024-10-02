using FinanceApi.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FinanceApi.Controllers.MovTransferencia
{
    [ApiController]
    [Route("api/transferencia")]
    public class MovTransferenciaController(IMovTransferenciaRepository repository, ICadContaRepository contaRepository) : ControllerBase
    {
        private readonly IMovTransferenciaRepository _repository = repository;
        private readonly ICadContaRepository _contaRepository = contaRepository;

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

        [HttpPost, Route("create")]
        public async Task<IActionResult> PostAsync([FromBody] MovTransferenciaViewModel viewModel, CancellationToken cancellation)
        {
            var contaEntrada = await _contaRepository.GetAsync(viewModel.ContaEntrada.Value, cancellation);
            var contaSaida = await _contaRepository.GetAsync(viewModel.ContaSaida.Value, cancellation);

            if (contaSaida.Saldo < viewModel.Valor)
            {
                return BadRequest("Saldo insuficiente na conta de origem.");
            }

            contaEntrada.SomarSaldo(viewModel.Valor);
            contaSaida.SubtrairSaldo(viewModel.Valor);

            var movTransferencia = new Models.MovTransferencia(
                viewModel.Descricao,
                viewModel.Valor,
                viewModel.Observacao,
                viewModel.DataTransferencia,
                contaEntrada: contaEntrada,
                contaSaida: contaSaida
            );

            await _contaRepository.UpdateAsync(contaEntrada, cancellation);
            await _contaRepository.UpdateAsync(contaSaida, cancellation);

            await _repository.InsertAsync(movTransferencia, cancellation);

            return Ok(new { Message = "Transferencia executada com sucesso." });
        }

    }
}
