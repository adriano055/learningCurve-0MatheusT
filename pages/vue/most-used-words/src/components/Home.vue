<template>
  <v-container fluid> <!-- fluid ocupa a tela inteira -->
      <v-form>
          <v-file-input 
            label="Selecione as Legendas"
            prepend-icon="mdi-message-text"
            append-outer-icon="mdi-send"
            outlined
            multiple
            chips
            v-model="files"
            @click:append-outer="processSubtitles" />
      </v-form>
      <div class="pills">
          <Pill v-for="word in groupedWords" :key="word.name"
            :name="word.name" :amount="word.amount" />
      </div>
  </v-container>
</template>

<script>
import { ipcRenderer } from  'electron'
import Pill from './Pill'

export default {
    components: { Pill },
    data: function () { 
        return {
            files: [],
            groupedWords: [] //retorna os dados que quer usar dentro do componente home
        }
    },
    methods: {
        processSubtitles() {
            const paths = this.files.map(f => f.path)
            ipcRenderer.send('process-subtitles', paths)
            ipcRenderer.on('process-subtitles', (event, resp) => {
                this.groupedWords = resp
            })
        }
    }
}
</script>

<style>
    .pills {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>