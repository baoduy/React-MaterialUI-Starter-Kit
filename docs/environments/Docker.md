# Docker Support

1.  Build Image `docker build`.
2.  Build and Tag the image `docker image build . -f sm-react-docker-nginx/Dockerfile -t [YOUR_ID]/react-materialui-started-kit:latest`.
    Example `docker image build . -f sm-react-docker-nginx/Dockerfile -t baoduy2412/react-materialui-started-kit:latest`.
3.  Push inage to Docker hub `docker push [YOUR_ID]/react-materialui-started-kit:latest`
    Example `docker push baoduy2412/react-materialui-started-kit:latest`.

The application will running port 80 and 443 in Docker.
The image can be found in Docker hub [here](https://hub.docker.com/r/baoduy2412/react-materialui-started-kit/).

However if you are not using Docker just simply remove the submodule **sm-react-docker-nginx** There is no impact to the application.
