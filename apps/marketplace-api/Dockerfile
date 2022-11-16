FROM mcr.microsoft.com/dotnet/sdk:6.0 as base

WORKDIR /app

FROM base as dev
RUN dotnet dev-certs https --clean
RUN dotnet dev-certs https -t
EXPOSE 7059
EXPOSE 5210
USER root
CMD ["dotnet", "run"]