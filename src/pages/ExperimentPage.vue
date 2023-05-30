<template>
  <!--====== EXPER PART START ======-->
  <section id="exper" class="pricing-area pb-5">
    <div class="container text-center">
      <div class="row">
        <div class="col-md-12">
          <!-- Experiment Title -->
          <h1 class="display-6 mb-3">Percobaan yang Tersedia</h1>
          <p>Berikut merupakan percobaan yang dapat disimulasikan secara langsung.</p>
        </div>
      </div>
      <div class="row g-2 justify-content-center mb-4">
        <!-- Experiment Tabs -->
        <div class="col-auto">
          <button
            class="btn-function wow fadeInUp"
            data-wow-duration="0.2s"
            data-wow-delay="0.2s"
            v-text="'generate_input_data'"
            @click="addWidget('input')"
          />
        </div>
        <div class="col-auto">
          <button
            class="btn-function wow fadeInUp"
            data-wow-duration="0.2s"
            data-wow-delay="0.2s"
            v-text="'qam_modulation'"
            @click="addWidget('qammod')"
          />
        </div>
        <div class="col-auto">
          <button
            class="btn-function wow fadeInUp"
            data-wow-duration="0.2s"
            data-wow-delay="0.2s"
            v-text="'serial_to_parallel_conversion'"
            @click="addWidget('serial_paralel')"
          />
        </div>
        <div class="col-auto">
          <button
            class="btn-function wow fadeInUp"
            data-wow-duration="0.2s"
            data-wow-delay="0.2s"
            v-text="'ifft_process'"
            @click="addWidget('ifft')"
          />
        </div>
        <div class="col-auto">
          <button
            class="btn-function wow fadeInUp"
            data-wow-duration="0.2s"
            data-wow-delay="0.2s"
            v-text="'add_cp'"
            @click="addWidget('addcp')"
          />
        </div>
        <div class="col-auto">
          <button
            class="btn-function wow fadeInUp"
            data-wow-duration="0.2s"
            data-wow-delay="0.2s"
            v-text="'parallel_to_serial_conversion'"
            @click="addWidget('paralel_serial')"
          />
        </div>
        <div class="col-auto">
          <button
            class="btn-function wow fadeInUp"
            data-wow-duration="0.2s"
            data-wow-delay="0.2s"
            v-text="'output'"
            @click="addWidget('output')"
          />
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-md-12 drag-area-wrapper p-0">
          <div class="drag-area">
            <!-- <p>Drag and drop gambar ke sini</p> -->
            <div
              v-for="(widgetName, index) in Object.keys(widgets)"
              :key="index"
              :id="widgets[widgetName].id"
              class="position-absolute"
              :style="`transform: translate(${widgets[widgetName].xAxis}px, ${widgets[widgetName].yAxis}px);`"
              @dragstart="activateWidget(widgetName)"
              @dragenter="activateWidget(widgetName)"
              @click="activateWidget(widgetName)"
            >
              <div class="container p-0">
                <p
                  v-if="widgets[widgetName].active"
                  class="user-select-none position-absolute widget-title w-100"
                  style="font-size: 12px; margin-bottom: 3px;"
                  v-text="widgets[widgetName].name"
                />
                <img
                  :src="widgets[widgetName].url"
                  alt="Dragged Image"
                  :class="`user-select-none ${widgets[widgetName].active ? 'widget-wrapper' : ''}`"
                >
                <div v-if="widgets[widgetName].active" class="d-flex w-100 widget-control-wrapper">
                  <div v-if="widgets[widgetName].data !== null" class="col-auto p-0">
                    <button class="btn btn-sm btn-outline-dark px-1 py-0" @click="openFormWidgetModal(widgetName)" data-bs-target="#widget-form-modal" data-bs-toggle="modal">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                      </svg>
                    </button>
                  </div>
                  <div class="col-auto p-0">
                    <button class="btn btn-sm btn-outline-danger px-1 py-0" @click="deleteWidget(widgetName)">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <button
            class="btn-function"
            @click="submit()"
            v-text="'Run Code'"
          />
        </div>
      </div>
    </div>

    <div class="modal fade" id="widget-form-modal" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title"
              v-text="formWidgetModal.show ? (widgets[formWidgetModal.widgetIndex].name ?? '') : ''"
            />
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div
              v-for="(form, index) in editedForms"
              :key="index"
            >
              <div v-if="(typeof form.value) === 'boolean'" class="form-check">
                <label class="form-check-label">
                  {{ form.title }}
                  <input v-model="form.value" type="checkbox" class="form-check-input" checked>
                </label>
              </div>
              <div v-else class="form-group">
                <label>{{ form.title }}</label>
                <input v-model="form.value" type="text" class="form-control" :placeholder="`Masukkan ${form.title}...`" aria-describedby="helpId">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
              @click="closeFormWidgetModal()"
              v-text="'Cancel'"
            />
            <button
              type="button"
              class="btn btn-success"
              data-bs-dismiss="modal"
              @click="saveFormWidgetModalData(editedForms)"
              v-text="'Save'"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--====== EXPER PART ENDS ======-->
</template>


<script>
import interact from "interactjs";
import axios from 'axios';

export default {
  name: 'ExperimentPage',

  components: {
  },

  data () {
    return {
      widgets: {},
      accumulatedRefs: 0,
      formWidgetModal: {
        show: false,
        widgetIndex: ''
      },
      editedForms: []
    }
  },

  mounted () {
    const tempWidgets = this.widgets
    document.addEventListener('keyup', function (event) {
      if (event.key === 'Escape') {
        Object.keys(tempWidgets).map((element) => {
          tempWidgets[element].active = false
        })
      }

      if (event.key === 'Delete') {
        const activeWidget = Object.keys(tempWidgets).find(element =>
          tempWidgets[element].active) ?? null

        if (activeWidget !== null) {
          Object.keys(tempWidgets).map((element) => {
            if (element === activeWidget) {
              delete tempWidgets[element]
            }
          })
        }
      }
    });
  },

  methods: {
    addWidget (widgetName) {
      const existedWidget = Object.keys(this.widgets).find((element) =>
        element === widgetName) ?? null

      if (existedWidget !== null) { return }

      let dataWidget = {
        id: `widget-${widgetName}`,
        name: widgetName,
        url: `assets/images/widgets/${widgetName}.png`,
        xAxis: 0.0,
        yAxis: 0.0,
        active: false,
        dialog: false,
      }

      if (widgetName === 'input') {
        dataWidget.data = { mod_order: '', subcarrier: '' }
      } else if (widgetName === 'ifft') {
        dataWidget.data = { ifft: '' }
      } else if (widgetName === 'addcp') {
        dataWidget.data = { add_cp: '' }
      } else if (widgetName === 'output') {
        dataWidget.data = { output: '', output_flag: true }
      } else {
        dataWidget.data = null
      }

      this.widgets[widgetName] = dataWidget

      setTimeout(() => {
        const widget = document.getElementById(`widget-${widgetName}`)
        if (widget) {
          interact(widget)
            .draggable({
              inertia: false,
              modifiers: [
                interact.modifiers.restrictRect({
                  restriction: 'parent',
                  elementRect: { top: 0.3, left: 0, bottom: 1, right: 1 },
                  endOnly: false
                })
              ],
              autoScroll: true,
              onmove: this.dragMoveListener
            })
            .on('down', function(event) {
              var target = event.target;
              target.style.zIndex = '9999';
            })
            .on('up', function(event) {
              var target = event.target;
              target.style.zIndex = '';
            });
        }
        this.accumulatedRefs++;
      }, 0);
    },

    deleteWidget (widgetName) {
      delete this.widgets[widgetName]
    },

    activateWidget (widgetName) {
      this.inactiveAllWidget()

      if (this.widgets[widgetName]) {
        this.widgets[widgetName].active = true
      }
    },

    inactiveAllWidget () {
      Object.keys(this.widgets).map(element =>
        this.widgets[element].active = false)
    },

    dragMoveListener (event) {
      const target = event.target
      let widgetItemIndex = target.id.substring(target.id.indexOf("-") + 1);
      
      this.widgets[widgetItemIndex].xAxis = this.widgets[widgetItemIndex].xAxis + event.dx;
      this.widgets[widgetItemIndex].yAxis = this.widgets[widgetItemIndex].yAxis + event.dy;
    },

    setForms () {
      let dataWidget = this.widgets[this.formWidgetModal.widgetIndex]
      let fields = []

      if (dataWidget.name === 'input') {
        fields = ['Mod Order', 'Subcarrier']
      } else if (dataWidget.name === 'ifft') {
        fields = ['IFFT']
      } else if (dataWidget.name === 'addcp') {
        fields = ['Add CP']
      } else if (dataWidget.name === 'output') {
        fields = ['Output', 'Output Flag']
      }

      Object.keys(dataWidget.data).map((element, index) => {
        const value = dataWidget.data[element]
        const field = fields[index]
        this.editedForms.push({ title: field, value: value })
      })
    },

    openFormWidgetModal (index) {
      this.editedForms = []
      this.formWidgetModal.show = true
      this.formWidgetModal.widgetIndex = index
      this.setForms()
    },

    closeFormWidgetModal () {
      this.formWidgetModal.show = false
      this.formWidgetModal.widgetIndex = ''
    },

    saveFormWidgetModalData (modalFormData) {
      let selectedWidget = this.widgets[this.formWidgetModal.widgetIndex]
      Object.keys(selectedWidget.data).map((element, index) => {
        selectedWidget.data[element] = modalFormData[index].value
      })
      this.closeFormWidgetModal()
    },

    async submit () {
      const url = ''
      let dataRequest = {
        input: { mod_order: '', subcarrier: '' },
        ifft: '',
        addcp: '',
        output: { output: '', output_flag: false },
      }

      if (this.widget.input.data) {
        dataRequest.input = {
          mod_order: this.widget.input.data.mod_order ?? '',
          subcarrier: this.widget.input.data.subcarrier ?? ''
        }
      } else if (this.widget.ifft.data) {
        dataRequest.ifft = this.widget.ifft.data ?? ''
      } else if (this.widget.addcp.data) {
        dataRequest.addcp = this.widget.addcp.data ?? ''
      } else if (this.widget.output.data) {
        dataRequest.output = {
          output: this.widget.output.data.output ?? '',
          output_flag: this.widget.output.data.output_flag ?? false
        }
      }

      await axios.post(url, dataRequest)
        .then((result) => result)
        .catch((err) => err)
        .finally(() => {})
    }
  }
}
</script>


<style scoped>
  .pricing-area {
    padding-top: 75px;
  }

  .display-6 {
    font-size: 2.5rem;
    line-height: 1.2;
  }

  .btn-function {
    font-size: 15px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .btn-function:hover {
    background-color: #f4c522;
    color: #000;
  }

  .btn-function:active {
    background-color: #f4c522;
  }

  .drag-area-wrapper {
    border: 2px dashed #ccc;
    border-radius: 5px;
    margin: 2px;
    overflow: hidden;
  }

  .drag-area {
    background-color: white;
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .drag-area img {
    max-width: 100%;
    max-height: 100%;
  }

  .widget-wrapper {
    border: 1px dotted grey;
  }

  .widget-control-wrapper {
    position: absolute;
    transform: translateY(3px);
    justify-content: center;
  }

  .widget-title {
    transform: translateY(-17px);
    justify-content: center;
    text-align: center;
  }
</style>