using BFF.EF;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BFF.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : ControllerBase
    {
        AppDbContext _appDbContext;
        public CategoriesController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetList()
        {
            var result = await _appDbContext.Category.Include(x => x.ProductCategoryLinks).ThenInclude(x => x.Product).ToListAsync();
            return Ok(result);
        }

    }
}
