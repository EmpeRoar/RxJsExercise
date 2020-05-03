using BFF.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace BFF.EF.Configs
{
    public class ProductConfig : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.ToTable("Product", Constant.DEFAULT_SCHEMA);
            builder.HasKey(k => new { k.Id });

            builder.Property(p => p.Name).HasMaxLength(255);
        }
    }
}
