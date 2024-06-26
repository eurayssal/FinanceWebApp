using FinanceApi.Models;
using FinanceApi.Repositories;
using FinanceApi.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace FinanceApi.Controllers
{
    [ApiController]
    [Route("api/despesa")]
    public class CadTagController : ControllerBase
    {
        [HttpPost, Route("create")]
        public async Task<IActionResult> Post(CadTagViewModel viewModel, CancellationToken cancellation)
        {
            var cadTag = new CadTag(viewModel.Nome);
            var repository = new CadTagRepository();
            await repository.InsertAsync(cadTag, cancellation);

            return Ok(cadTag.ToString());
        }
    }
}
