using FinanceApi.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FinanceApi.Controllers.CadTag
{
    [ApiController]
    [Route("api/tag")]
    public class CadTagController : ControllerBase
    {
        private readonly ICadTagRepository _repository;

        public CadTagController(ICadTagRepository repository)
        {
            _repository = repository;
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync(CadTagViewModel viewModel, CancellationToken cancellation)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var cadTag = new Models.CadTag(viewModel.Nome);
            await _repository.CreateAsync(cadTag: cadTag, cancellation);
            return Ok(new { Message = "Tag criada com sucesso." });
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync(CancellationToken cancellation)
        {
            var cadTags = await _repository.GetAllAsync(cancellation);
            return Ok(cadTags);
        }

        [HttpPut, Route("update/{id}")]
        public async Task<IActionResult> UpdateAsync([FromBody] CadTagViewModel viewModel, CancellationToken cancellation)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var cadTag = await _repository.GetAsync(viewModel.Id.Value, cancellation);

            cadTag.Update(nome: viewModel.Nome);

            if (cadTag == null)
                return NotFound();

            await _repository.UpdateAsync(cadTag, cancellation);
            return Ok(new { Message = "Tag atualizada com sucesso.", CadTag = cadTag });
        }
    }
}
