using FinanceApi.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FinanceApi.Controllers.CadCartao
{
    [ApiController]
    [Route("api/cartao")]
    public class CadCartaoController : ControllerBase
    {
        private readonly ICadCartaoRepository _repository;

        public CadCartaoController(ICadCartaoRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync(CancellationToken cancellation)
        {
            var cadCartao = await _repository.GetAllAsync(cancellation);
            return Ok(cadCartao);
        }

        [HttpGet, Route("{id}")]
        public async Task<IActionResult> GetAsync(Guid id, CancellationToken cancellation)
        {
            var cadCartao = await _repository.GetAsync(id, cancellation);
            return Ok(cadCartao);
        }

        [HttpPost, Route("create")]
        public async Task<IActionResult> PostAsync(CadCartaoViewModel viewModel, CancellationToken cancellation)
        {
            var cadCartao = new Models.CadCartao(nome: viewModel.Nome,
               dataFechamento: viewModel.DataFechamento,
               dataVencimento: viewModel.DataFechamento,
               valorFatura: viewModel.ValorFatura);

            await _repository.InsertAsync(cadCartao, cancellation);
            return Ok(new { Message = "Cartão criado com sucesso." });
        }

        [HttpPut, Route("update/{id}")]
        public async Task<IActionResult> UpdateAsync(CadCartaoViewModel viewModel, CancellationToken cancellation)
        {
            var cadCartao = await _repository.GetAsync(viewModel.Id.Value, cancellation);

            cadCartao.Update(nome: viewModel.Nome,
               dataFechamento: viewModel.DataFechamento,
               dataVencimento: viewModel.DataFechamento,
               saldo: viewModel.ValorFatura);

            await _repository.UpdateAsync(cadCartao, cancellation);
            return Ok(new { Message = "Cartão criado com sucesso." });
        }

        [HttpDelete, Route("delete/{id}")]
        public async Task<IActionResult> RemoveAsync(Guid id, CancellationToken cancellation)
        {
            await _repository.RemoveAsync(id, cancellation);
            return Ok(new { Message = "Cartão removido com sucesso." });
        }
    }
}
