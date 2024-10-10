using FinanceApi.Repositories.Interfaces;
using Infraestructure.Controllers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FinanceApi.Controllers.CadTag
{
    [Authorize]
    [ApiController]
    [Route("api/tag")]
    public class CadTagController : BaseController
    {
        private readonly ICadTagRepository _repository;

        public CadTagController(ICadTagRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync(CancellationToken cancellation)
        {
            var cadTags = await _repository.GetAllAsync(GetUserId(), cancellation);
            return Ok(cadTags);
        }

        [HttpGet, Route("{id}")]
        public async Task<IActionResult> GetAsync(Guid id, CancellationToken cancellation)
        {
            var cadTags = await _repository.GetAsync(id, cancellation);
            return Ok(cadTags);
        }

        [HttpPost, Route("create")]
        public async Task<IActionResult> PostAsync(CadTagViewModel viewModel, CancellationToken cancellation)
        {

            var cadTag = new Models.CadTag(GetUserId(), viewModel.Nome);
            await _repository.InsertAsync(cadTag, cancellation);
            return Ok(new { Message = "Tag criada com sucesso." });
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

        [HttpDelete, Route("delete/{id}")]
        public async Task<IActionResult> RemoveAsync(Guid id, CancellationToken cancellation)
        {
            await _repository.RemoveAsync(id, cancellation);
            return Ok(new { Message = "Tag removida com sucesso." });
        }
    }
}
