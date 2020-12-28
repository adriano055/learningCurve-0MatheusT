const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: modoDev ? 'development' : 'production', //modo de desenvolvimento, produção...
  entry: './src/principal.js', //entrada de arquivos
  output: {                    //Condigurações de saída.
    filename: 'principal.js',
    path: __dirname + '/public' //defino o caminho.
  },
  devServer: {
    contentBase: "./public",
    port: 9000
  },
  optimization: {
      minimizer: [
          new UglifyJsPlugin({
              cache: true,
              parallel: true
          }),
          new OptimizeCSSAssetsPlugin({})
      ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "estilo.css"
    })
  ],
  

  module: {     //cadastrando o loader para reconhecer o css.
    rules: [
      {
        //test: /\.css$/,  //expressão regular parar ler .css
        test: /\.s?[ac]ss$/,
        //test: /\.s?[ac]css$/,  //expressão regular parar ler sass
        use: [
          MiniCssExtractPlugin.loader,    //Transforma o css para externo (Conflita com o style-loader)
          //'style-loader', //responsável por adc dentro da dom a tag <style>
          'css-loader', //interpreta imports, urls dentro do css.
          'sass-loader'
        ]
      }, {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader']
      }]
    }
  }

//no final, tudo fica em um único arquivo js.