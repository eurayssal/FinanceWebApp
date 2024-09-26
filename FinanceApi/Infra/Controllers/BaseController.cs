using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Infraestructure.Controllers;

[ApiController, Authorize]
public abstract class BaseController() : ControllerBase
{
    public virtual Guid GetUserId()
    {
        string? id = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

        if (string.IsNullOrEmpty(id))
            throw new NullReferenceException("Entity ID is empty int this JWT.");

        return new Guid(id);
    }
}