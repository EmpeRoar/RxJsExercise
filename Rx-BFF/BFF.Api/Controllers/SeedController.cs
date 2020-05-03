using BFF.Domain;
using BFF.EF;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BFF.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SeedController : ControllerBase
    {
        AppDbContext _appDbContext;
        public SeedController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        //[HttpGet]
        //public async Task<IActionResult> Get()
        //{
        //    var categories = new List<Category>()
        //    {
        //        new Category()
        //        {
        //             Name = "Fruits"
        //        },
        //        new Category()
        //        {
        //            Name = "Cars"
        //        },
        //        new Category()
        //        {
        //            Name = "Shoes"
        //        },
        //        new Category()
        //        {
        //            Name = "Pants"
        //        },
        //        new Category()
        //        {
        //            Name = "Laptops"
        //        },
        //        new Category()
        //        {
        //            Name = "Waters"
        //        }
        //    };
        //    await _appDbContext.Category.AddRangeAsync(categories);
        //    await _appDbContext.SaveChangesAsync();

        //    var fruits = new List<Product>()
        //    {
        //        new Product()
        //        {
        //             Name = "Mango",
        //             Price = 250
        //        },
        //        new Product()
        //        {
        //            Name = "Guava",
        //            Price = 350
        //        },
        //    };

        //    var cars = new List<Product>()
        //    {
        //        new Product()
        //        {
        //            Name = "Mitsubishi",
        //            Price = 5000000
        //        },
        //        new Product()
        //        {
        //            Name = "Honda",
        //            Price = 67000000
        //        }
        //     };


        //    var shoes = new List<Product>()
        //    {
        //        new Product()
        //        {
        //            Name = "Nike",
        //            Price = 350
        //        },
        //        new Product()
        //        {
        //            Name = "Adidas",
        //            Price = 460
        //        },
        //    };

        //    var pants = new List<Product>()
        //    {
        //        new Product()
        //        {
        //            Name = "Levis",
        //            Price = 500
        //        },
        //        new Product()
        //        {
        //            Name = "Jag",
        //            Price = 340
        //        },
        //        new Product()
        //        {
        //            Name = "Lee",
        //            Price = 475
        //        }
        //    };

        //    var laptops = new List<Product>()
        //    {

        //        new Product()
        //        {
        //            Name = "Lenovo",
        //            Price = 460
        //        },
        //        new Product()
        //        {
        //            Name = "IBM",
        //            Price = 560
        //        },
        //        new Product()
        //        {
        //            Name = "HP",
        //            Price = 376
        //        },
        //        new Product()
        //        {
        //            Name = "Macbook",
        //            Price = 980
        //        },
        //    };
        //    var waters = new List<Product>() {
                
        //        new Product()
        //        {
        //            Name = "Wilkins",
        //            Price = 980
        //        },
        //        new Product()
        //        {
        //            Name = "Absolute",
        //            Price = 378
        //        },
        //        new Product()
        //        {
        //            Name = "Nature Spring",
        //            Price = 980
        //        }
        //    };

        //    await _appDbContext.Product.AddRangeAsync(fruits);
        //    await _appDbContext.Product.AddRangeAsync(cars);
        //    await _appDbContext.Product.AddRangeAsync(shoes);
        //    await _appDbContext.Product.AddRangeAsync(pants);
        //    await _appDbContext.Product.AddRangeAsync(laptops);
        //    await _appDbContext.Product.AddRangeAsync(waters);
        //    await _appDbContext.SaveChangesAsync();

        //    foreach (var fruit in fruits)
        //    {
        //        await _appDbContext.ProductCategoryLink.AddAsync(new ProductCategoryLink() { 
        //            Product = fruit,
        //            Category = categories.FirstOrDefault(x => x.Name.Contains("Fruit"))
        //        });
        //    }

        //    foreach (var car in cars)
        //    {
        //        await _appDbContext.ProductCategoryLink.AddAsync(new ProductCategoryLink()
        //        {
        //            Product = car,
        //            Category = categories.FirstOrDefault(x => x.Name.Contains("Car"))
        //        });
        //    }

        //    foreach (var shoe in shoes)
        //    {
        //        await _appDbContext.ProductCategoryLink.AddAsync(new ProductCategoryLink()
        //        {
        //            Product = shoe,
        //            Category = categories.FirstOrDefault(x => x.Name.Contains("Shoes"))
        //        });
        //    }

        //    foreach (var pant in pants)
        //    {
        //        await _appDbContext.ProductCategoryLink.AddAsync(new ProductCategoryLink()
        //        {
        //            Product = pant,
        //            Category = categories.FirstOrDefault(x => x.Name.Contains("Pants"))
        //        });
        //    }

        //    foreach (var laptop in laptops)
        //    {
        //        await _appDbContext.ProductCategoryLink.AddAsync(new ProductCategoryLink()
        //        {
        //            Product = laptop,
        //            Category = categories.FirstOrDefault(x => x.Name.Contains("Laptops"))
        //        });
        //    }

        //    foreach (var water in waters)
        //    {
        //        await _appDbContext.ProductCategoryLink.AddAsync(new ProductCategoryLink()
        //        {
        //            Product = water,
        //            Category = categories.FirstOrDefault(x => x.Name.Contains("Waters"))
        //        });
        //    }

        //    await _appDbContext.SaveChangesAsync();
        //    return Ok();
        //}
    }
}
