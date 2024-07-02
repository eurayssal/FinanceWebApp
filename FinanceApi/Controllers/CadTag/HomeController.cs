using FinanceApi.Repositories.Interface;
using FinanceApi.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace FinanceApi.Controllers.CadTag
{
    [ApiController]
    [Route("tag")]
    public class HomeController : ControllerBase
    {
        private readonly ICadTagRepository _repository;

        public HomeController(ICadTagRepository repository)
        {
            _repository = repository;
        }

        [HttpPost, Route("create")]
        public async Task<IActionResult> PostAsync([FromBody] CadTagViewModel viewModel, CancellationToken cancellation)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var cadTag = new Models.CadTag(viewModel.Nome);
            await _repository.InsertAsync(cadTag, cancellation);

            return Ok(new { Message = "Tag criada com sucesso.", CadTag = cadTag });
        }

        [HttpGet, Route("getAll")]
        public async Task<IActionResult> GetAllAsync(CancellationToken cancellation)
        {
            var cadTags = await _repository.GetAllAsync(cancellation);
            return Ok(cadTags);
        }

        [HttpPut, Route("update/{id}")]
        public async Task<IActionResult> UpdateAsync(Guid id, [FromBody] CadTagViewModel viewModel, CancellationToken cancellation)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var existingCadTag = await _repository.GetAsync(id, cancellation);

            if (existingCadTag == null)
                return NotFound();

            existingCadTag.Nome = viewModel.Nome;
            await _repository.UpdateAsync(existingCadTag, cancellation);
            return Ok(new { Message = "Tag atualizada com sucesso.", CadTag = existingCadTag });
        }

        [HttpDelete, Route("delete/{id}")]
        public async Task<IActionResult> DeleteAsync(Guid id, CancellationToken cancellation)
        {
            var existingCadTag = await _repository.GetAsync(id, cancellation);

            if (existingCadTag == null)
                return NotFound();

            await _repository.DeleteAsync(id, cancellation);

            return Ok(new { Message = "Tag deletada com sucesso." });
        }
    }
}
