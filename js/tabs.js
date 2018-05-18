// From: https://discourse.gohugo.io/t/code-tabs-widget/975/6
$('.tab-content').find('.tab-pane').each(function(idx, item) {
  var navTabs = $(this).closest('.code-tabs').find('.nav-tabs'),
      title = $(this).attr('title'),
      defaultTab;
  if (idx == 0) {
    defaultTab = " active";
  } else {
    defaultTab = "";
  }
  navTabs.append('<li class="nav-item"><a class="nav-link'+defaultTab+'" data-toggle="tab" href="#'+title+'" role="tab" aria-controls='+title+' id='+title+' aria-selected="false">'+title+'</a></li');
});

$('.code-tabs ul.nav-tabs').each(function() {
  $(this).find("li:first").addClass('active');
})

$('.code-tabs .tab-content').each(function() {
  $(this).find("div:first").addClass('active');
});

$('.nav-tabs a').click(function(e){
  e.preventDefault();
  var tab = $(this).parent(),
      tabIndex = tab.index(),
      tabPanel = $(this).closest('.code-tabs'),
      tabPane = tabPanel.find('.tab-pane').eq(tabIndex);
  tabPanel.find('.active').removeClass('active');
  tab.addClass('active');
  tabPane.addClass('active');
});