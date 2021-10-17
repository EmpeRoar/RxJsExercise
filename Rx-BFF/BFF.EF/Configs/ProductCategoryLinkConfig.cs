using BFF.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace BFF.EF.Configs
{
    public class ProductCategoryLinkConfig : IEntityTypeConfiguration<ProductCategoryLink>
    {
        public void Configure(EntityTypeBuilder<ProductCategoryLink> builder)
        {
            builder.ToTable("ProductCategoryLink", Constant.DEFAULT_SCHEMA);
            builder.HasKey(k => new { k.ProductId, k.CategoryId });

            builder.HasOne(x => x.Product)
                   .WithMany(x => x.ProductCategoryLinks)
                   .HasForeignKey(x => x.ProductId)
                   .OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(x => x.Category)
                   .WithMany(x => x.ProductCategoryLinks)
                   .HasForeignKey(x => x.CategoryId)
                   .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
