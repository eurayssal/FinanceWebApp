using FinanceApi.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FinanceApi.Controllers.CadConta
{
    [ApiController]
    [Route("api/conta")]
    public class CadContaController : ControllerBase
    {
        private readonly ICadContaRepository _repository;

        public CadContaController(ICadContaRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync(CancellationToken cancellation)
        {
            var cadConta = await _repository.GetAllAsync(cancellation);
            return Ok(cadConta);
        }

        [HttpGet, Route("{id}")]
        public async Task<IActionResult> GetAsync(Guid id, CancellationToken cancellation)
        {
            var cadConta = await _repository.GetByIdAsync(id, cancellation);
            return Ok(cadConta);
        }

        [HttpPost, Route("create")]
        public async Task<IActionResult> PostAsync(CadContaViewModel viewModel, CancellationToken cancellation)
        {
            var cadConta = new Models.CadConta(nome: viewModel.Nome,
                saldo: viewModel.Saldo,
                status: viewModel.Status);

            await _repository.CreateAsync(cadConta, cancellation);
            return Ok(new { Message = "Conta criada com sucesso." });
        }

        [HttpPut, Route("update/{id}")]
        public async Task<IActionResult> UpdateAsync(CadContaViewModel viewModel, CancellationToken cancellation)
        {
            var cadConta = await _repository.GetByIdAsync(viewModel.Id.Value, cancellation);

            cadConta.Update(nome: viewModel.Nome,
                saldo: viewModel.Saldo,
                status: viewModel.Status);

            await _repository.UpdateAsync(cadConta, cancellation);
            return Ok(new { Message = "Conta atualizada com sucesso." });
        }

        [HttpDelete, Route("delete/{id}")]
        public async Task<IActionResult> RemoveAsync(Guid id, CancellationToken cancellation)
        {
            await _repository.RemoveAsync(id, cancellation);
            return Ok(new { Message = "Conta removida com sucesso." });
        }
    }
}
