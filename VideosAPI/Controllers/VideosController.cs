using Microsoft.AspNetCore.Mvc;
using VideosAPI.Models;

namespace VideosAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class VideosController : ControllerBase {
    private readonly ILogger<VideosController> _logger;
    public VideosController(ILogger<VideosController> logger) {
        _logger = logger;
    }

    [HttpGet("videos_list")]
    public IEnumerable<Video> GetVidoes() {
        return new List<Video>{
            new Video{Id=1, Name="test1", Description="hi im a description for test 1"},
            new Video{Id=1, Name="test2", Description="test2, description i am."},
        };
    }
}