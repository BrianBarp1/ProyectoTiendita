using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class MigracionOrder2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Cliente",
                table: "Orders");

            migrationBuilder.RenameColumn(
                name: "Producto",
                table: "Orders",
                newName: "Client");

            migrationBuilder.RenameColumn(
                name: "Fecha",
                table: "Orders",
                newName: "Date");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Date",
                table: "Orders",
                newName: "Fecha");

            migrationBuilder.RenameColumn(
                name: "Client",
                table: "Orders",
                newName: "Producto");

            migrationBuilder.AddColumn<string>(
                name: "Cliente",
                table: "Orders",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
