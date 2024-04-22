using FinanceApi.Models;
using FinanceApi.Services;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.Configure<FinanceDatabaseSettings>(
    builder.Configuration.GetSection("FinanceDatabase"));

builder.Services.AddSingleton<IMongoDatabase>(provider =>
{
    var setting = provider.GetRequiredService<IOptions<FinanceDatabaseSettings>>().Value;
    var client = new MongoClient(setting.ConnectionString);
    return client.GetDatabase(setting.DatabaseName);
});

builder.Services.AddSingleton<FinanceDatabaseSettings>();
builder.Services.AddSingleton<CadTagService>();
builder.Services.AddSingleton<CadCategoriaService>();
builder.Services.AddSingleton<CadCartaoService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(options =>
{
    options.AllowAnyOrigin();
    options.AllowAnyHeader();
    options.AllowAnyMethod();
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
