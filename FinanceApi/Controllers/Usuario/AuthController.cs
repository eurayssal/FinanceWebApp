﻿using FinanceApi.Controllers.Authorization.Login;
using FinanceApi.Controllers.Authorization.ViewModels;
using FinanceApi.Infra.Encrypt;
using FinanceApi.Models;
using FinanceApi.Repositories.Interfaces;
using Infraestructure.Controllers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FinanceApi.Controllers.Authorization
{
    [Route("api/usuario")]
    public class AuthController(IUsuarioRepository repository, JwtSettings jwtSettings) : BaseController
    {
        private readonly IUsuarioRepository _repository = repository;

        [HttpPost, Route("register"), AllowAnonymous]
        public async Task<IActionResult> RegisterAsync(UsuarioViewModel viewModel, CancellationToken cancellation)
        {
            try
            {
                var usuarioExistente = await _repository.GetByEmailAsync(viewModel.Email, cancellation);

                if (usuarioExistente != null)
                {
                    return BadRequest(new { message = "E-mail já está em uso." });
                }

                if (string.IsNullOrEmpty(viewModel.Email) || string.IsNullOrEmpty(viewModel.Senha))
                {
                    throw new ArgumentException("E-mail e senha são obrigatórios.");
                }

                var senhaEncriptada = BCrypt.Net.BCrypt.HashPassword(viewModel.Senha);

                var novoUsuario = new Usuario(viewModel.Nome,
                    viewModel.Email,
                    senhaEncriptada);

                var token = Guid.NewGuid().ToString();

                await _repository.InsertAsync(novoUsuario, cancellation);

                return Ok(new { message = "Usuário registrado com sucesso." });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost, Route("login"), AllowAnonymous]
        public async Task<IActionResult> LoginUserAsync(LoginViewModel viewModel, CancellationToken cancellation)
        {
            var user = await _repository.GetByEmailAsync(viewModel.Email, cancellation);

            Usuario usuario = await _repository.GetAsync(user.Id, cancellation);

            string token = TokenEx<Usuario>.GenerateJwtToken(usuario, jwtSettings);

            return Ok(new { AccessToken = token });
        }

        [HttpPost, Route("id")]
        public async Task<IActionResult> GetIdUsuarioAsync(CancellationToken cancellationToken)
        {
            await Task.Run(() =>
            {

            }, cancellationToken);
            return Ok(GetUserId());
        }
    }
}