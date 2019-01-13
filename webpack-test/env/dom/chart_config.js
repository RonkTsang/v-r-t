const BASE_CONFIG = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove'
  },
  series: [
    {
      type: 'tree',
      data: [],
      left: '2%',
      right: '2%',
      top: '8%',
      bottom: '20%',
      symbol: 'circle',
      orient: 'vertical',
      expandAndCollapse: false,
      label: {
        normal: {
          position: 'top',
          verticalAlign: 'middle',
          align: 'right',
          fontSize: 20
        }
      },
      tooltip: {
        formatter(params) {
          return params.name
        }
      },
      animationDurationUpdate: 750
    }
  ]
}

export const getConfig = (data) => {
  data && (BASE_CONFIG.series[0].data = [data])
  return BASE_CONFIG
}