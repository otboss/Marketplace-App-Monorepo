using Microsoft.AspNetCore.Mvc;

namespace  marketplace_api.Controllers;


[ApiController]
[Route("api/[controller]")]
public class SessionController : ControllerBase
{

    private readonly ILogger<SessionController> _logger;

}