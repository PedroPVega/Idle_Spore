using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace IdSpAPI.Migrations
{
    /// <inheritdoc />
    public partial class Pseudo_column_added : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Pseudo",
                table: "Players",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Pseudo",
                table: "Players");
        }
    }
}
