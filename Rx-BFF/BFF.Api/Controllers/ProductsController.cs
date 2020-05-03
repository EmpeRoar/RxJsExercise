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
    public class ProductsController : ControllerBase
    {
        AppDbContext _appDbContext;
        public ProductsController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetList()
        {
            var result = await _appDbContext.Product.Include(x => x.ProductCategoryLinks).ThenInclude(x => x.Category).ToListAsync();
            return Ok(result);
        }

        [HttpGet]
        [Route("category/{id}")]
        public async Task<IActionResult> GetProductsByCategory([FromRoute] int id) 
        {
            return Ok(await _appDbContext.Product
                                         .Include(x => x.ProductCategoryLinks)
                                         .Where(x => x.ProductCategoryLinks.All(pc => pc.CategoryId == id))
                                         .ToListAsync());
        }
    }
}
