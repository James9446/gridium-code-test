var user = {
    employment_answer:"", 
    experience_answer:"",
    companysize_answer:"",
    versioncontrol_answer:"",
    issuetracker_answer:"",
    buildserver_answer:"",
    codeanalysis_answer:"",
    knowledgerepo_answer:"",
    traveloptions_answer:"",
    schedule_answer:"",
    remotework_answer:"",
    relocation_answer:"",
    operating_system_answer:"",
    machine_type_answer:"",
    monitor_answer:"",
    level_answer:"",
    training_type_answer:"",
    pto_answer:""
}

// Employment type selection
var employmentType = enumerate("Permanent", "Temporary", "Project");

var label = $("#employment_selection_label");
label.append("<select id=\"employment_selection_dropdown\" onchange=\"displayEmploymentFrom(this)\"></select>");

var dropdown = $("#employment_selection_dropdown");
dropdown.append("<option disabled selected>Select employment type!</option>");

for (value in employmentType.all)
    dropdown.append("<option value=\"" + value + "\">" + employmentType.keys[value] + "</option>");

function displayEmploymentFrom(dropdown)
{
  $("#employment_selection_output").text(employmentType.keys[dropdown.value]);
  user.employment_answer = employmentType.keys[dropdown.value]
  console.log(user.employment_answer)
}

// Employment type selection
var experienceLevels = enumerate("Junior", "Seasoned", "Lead", "GrayBeard");

var label = $("#experience_selection_label");
label.append("<select id=\"experience_selection_dropdown\" onchange=\"displayExperienceFrom(this)\"></select>");

var dropdown = $("#experience_selection_dropdown");
dropdown.append("<option disabled selected>Select experience level type!</option>");

for (value in experienceLevels.all)
    dropdown.append("<option value=\"" + value + "\">" + experienceLevels.keys[value] + "</option>");

function displayExperienceFrom(dropdown)
{
  $("#experience_selection_output").text(experienceLevels.keys[dropdown.value]);
  user.experience_answer = experienceLevels.keys[dropdown.value]
  console.log(user.experience_answer)
}

// Company Size Selection
var companySize = enumerate("LessThanTen", "TenToTwenty", "TwentyToFifty", "FiftyToTwoHundred", "MoreThanTwoHundred");

var label = $("#company_size_selection_label");
label.append("<select id=\"company_size_selection_dropdown\" onchange=\"displayCompanySizeFrom(this)\"></select>");

var dropdown = $("#company_size_selection_dropdown");
dropdown.append("<option disabled selected>Select desired company size!</option>");

for (value in companySize.all)
    dropdown.append("<option value=\"" + value + "\">" + companySize.keys[value] + "</option>");

function displayCompanySizeFrom(dropdown)
{
  $("#company_size_selection_output").text(companySize.keys[dropdown.value]);
  user.companysize_answer = companySize.keys[dropdown.value]
  console.log(user.companysize_answer)
}

// Version Control Selection
var versionControlSystem = enumerate("NotYetChosen", "Git", "BitBucket");

var label = $("#version_control_selection_label");
label.append("<select id=\"version_control_selection_dropdown\" onchange=\"displayVersionControlSystemFrom(this)\"></select>");

var dropdown = $("#version_control_selection_dropdown");
dropdown.append("<option disabled selected>Select your VCS!</option>");

for (value in versionControlSystem.all)
    dropdown.append("<option value=\"" + value + "\">" + versionControlSystem.keys[value] + "</option>");

function displayVersionControlSystemFrom(dropdown)
{
  $("#version_control_selection_output").text(versionControlSystem.keys[dropdown.value]);
  user.versioncontrol_answer = versionControlSystem.keys[dropdown.value]
  console.log(user.versioncontrol_answer)
}

// Issue Tracker Selection
var issueTrackers = enumerate("NotYetChosen", "GitHub", "Jira", "Tikkit");

var label = $("#issue_tracker_selection_label");
label.append("<select id=\"issue_tracker_selection_dropdown\" onchange=\"displayIssueTrackersFrom(this)\"></select>");

var dropdown = $("#issue_tracker_selection_dropdown");
dropdown.append("<option disabled selected>Select your issue tracker!</option>");

for (value in issueTrackers.all)
    dropdown.append("<option value=\"" + value + "\">" + issueTrackers.keys[value] + "</option>");

function displayIssueTrackersFrom(dropdown)
{
  $("#issue_tracker_selection_output").text(issueTrackers.keys[dropdown.value]);
  user.issuetracker_answer = issueTrackers.keys[dropdown.value]
  console.log(user.issuetracker_answer)
}

// Build Server Selection
var buildServers = enumerate("NotYetChosen", "Jenkins", "Travis", "Codeship", "CircleCI");

var label = $("#build_server_selection_label");
label.append("<select id=\"build_server_selection_dropdown\" onchange=\"displayBuildServersFrom(this)\"></select>");

var dropdown = $("#build_server_selection_dropdown");
dropdown.append("<option disabled selected>Select your build server!</option>");

for (value in buildServers.all)
    dropdown.append("<option value=\"" + value + "\">" + buildServers.keys[value] + "</option>");

function displayBuildServersFrom(dropdown)
{
  $("#build_server_selection_output").text(buildServers.keys[dropdown.value]);
  user.buildserver_answer = buildServers.keys[dropdown.value]
  console.log(user.buildserver_answer)
}

// Analysis Tool Selection
var codeAnalysisTools = enumerate("NotYetChosen", "ESLint");

var label = $("#code_analysis_tool_selection_label");
label.append("<select id=\"code_analysis_tool_selection_dropdown\" onchange=\"displayCodeAnalysisToolsFrom(this)\"></select>");

var dropdown = $("#code_analysis_tool_selection_dropdown");
dropdown.append("<option disabled selected>Select your code analysis tool!</option>");

for (value in codeAnalysisTools.all)
    dropdown.append("<option value=\"" + value + "\">" + codeAnalysisTools.keys[value] + "</option>");

function displayCodeAnalysisToolsFrom(dropdown)
{
  $("#code_analysis_tool_selection_output").text(codeAnalysisTools.keys[dropdown.value]);
  user.codeanalysis_answer = codeAnalysisTools.keys[dropdown.value]
  console.log(user.codeanalysis_answer)
}

// Knowledge Repository Selection
var knowledgeRepos = enumerate("NotYetChosen", "GitHubWiki", "Confluence");

var label = $("#knowledge_repo_selection_label");
label.append("<select id=\"knowledge_repo_selection_dropdown\" onchange=\"displayKnowledgeReposFrom(this)\"></select>");

var dropdown = $("#knowledge_repo_selection_dropdown");
dropdown.append("<option disabled selected>Select your knowledge repository!</option>");

for (value in knowledgeRepos.all)
    dropdown.append("<option value=\"" + value + "\">" + knowledgeRepos.keys[value] + "</option>");

function displayKnowledgeReposFrom(dropdown)
{
  $("#knowledge_repo_selection_output").text(knowledgeRepos.keys[dropdown.value]);
  user.knowledgerepo_answer = knowledgeRepos.keys[dropdown.value]
  console.log(user.knowledgerepo_answer)
}

// Travel Options Selection
var travelOptions = enumerate("None", "Possible", "Plentiful");

var label = $("#travel_options_selection_label");
label.append("<select id=\"travel_options_selection_dropdown\" onchange=\"displaytTavelOptionsFrom(this)\"></select>");

var dropdown = $("#travel_options_selection_dropdown");
dropdown.append("<option disabled selected>Select your travel option!</option>");

for (value in travelOptions.all)
    dropdown.append("<option value=\"" + value + "\">" + travelOptions.keys[value] + "</option>");

function displaytTavelOptionsFrom(dropdown)
{
  $("#travel_options_selection_output").text(travelOptions.keys[dropdown.value]);
  user.traveloptions_answer = travelOptions.keys[dropdown.value]
  console.log(user.traveloptions_answer)
}

// Schedule Options Selection
var scheduleOptions = enumerate("Fixed", "Flexible");

var label = $("#schedule_options_selection_label");
label.append("<select id=\"schedule_options_selection_dropdown\" onchange=\"displayScheduleOptionsFrom(this)\"></select>");

var dropdown = $("#schedule_options_selection_dropdown");
dropdown.append("<option disabled selected>Select your schedule availability!</option>");

for (value in scheduleOptions.all)
    dropdown.append("<option value=\"" + value + "\">" + scheduleOptions.keys[value] + "</option>");

function displayScheduleOptionsFrom(dropdown)
{
  $("#schedule_options_selection_output").text(scheduleOptions.keys[dropdown.value]);
  user.schedule_answer = scheduleOptions.keys[dropdown.value]
  console.log(user.schedule_answer)
}

// Remote Work Selection Selection
var remoteWorking = enumerate("No", "Negotiable", "Required");

var label = $("#remote_work_selection_label");
label.append("<select id=\"remote_work_selection_dropdown\" onchange=\"displayRemoteWorkingFrom(this)\"></select>");

var dropdown = $("#remote_work_selection_dropdown");
dropdown.append("<option disabled selected>Select your remote work option!</option>");

for (value in remoteWorking.all)
    dropdown.append("<option value=\"" + value + "\">" + remoteWorking.keys[value] + "</option>");

function displayRemoteWorkingFrom(dropdown)
{
  $("#remote_work_selection_output").text(remoteWorking.keys[dropdown.value]);
  user.remotework_answer = remoteWorking.keys[dropdown.value]
  console.log(user.remotework_answer)
}

// Relocation Package Selection
var relocationPackages = enumerate("Nonealse", "Negotiable");

var label = $("#relocation_package_selection_label");
label.append("<select id=\"relocation_package_selection_dropdown\" onchange=\"displayRelocationPackagesFrom(this)\"></select>");

var dropdown = $("#relocation_package_selection_dropdown");
dropdown.append("<option disabled selected>Select your relocation package option!</option>");

for (value in relocationPackages.all)
    dropdown.append("<option value=\"" + value + "\">" + relocationPackages.keys[value] + "</option>");

function displayRelocationPackagesFrom(dropdown)
{
  $("#relocation_package_selection_output").text(relocationPackages.keys[dropdown.value]);
  user.relocation_answer = relocationPackages.keys[dropdown.value]
  console.log(user.relocation_answer)
}

// Operating System Selection
var operationSystems = enumerate("MacOSX", "CentOS", "Ubuntu", "Windows");

var label = $("#operating_system_selection_label");
label.append("<select id=\"operating_system_selection_dropdown\" onchange=\"displayOperationSystemsFrom(this)\"></select>");

var dropdown = $("#operating_system_selection_dropdown");
dropdown.append("<option disabled selected>Select your operating system!</option>");

for (value in operationSystems.all)
    dropdown.append("<option value=\"" + value + "\">" + operationSystems.keys[value] + "</option>");

function displayOperationSystemsFrom(dropdown)
{
  $("#operating_system_selection_output").text(operationSystems.keys[dropdown.value]);
  user.operating_system_answer = operationSystems.keys[dropdown.value]
  console.log(user.operating_system_answer)
}

// Machine Type Selection
var machineType = enumerate("Workstation", "Laptop");

var label = $("#machine_type_selection_label");
label.append("<select id=\"machine_type_selection_dropdown\" onchange=\"displayMachineTypeFrom(this)\"></select>");

var dropdown = $("#machine_type_selection_dropdown");
dropdown.append("<option disabled selected>Select your machine type!</option>");

for (value in machineType.all)
    dropdown.append("<option value=\"" + value + "\">" + machineType.keys[value] + "</option>");

function displayMachineTypeFrom(dropdown)
{
  $("#machine_type_selection_output").text(machineType.keys[dropdown.value]);
  user.machine_type_answer = machineType.keys[dropdown.value]
  console.log(user.machine_type_answer)
}

// Monitors Selection
var monitors = enumerate("Negotiable");

var label = $("#monitor_selection_label");
label.append("<select id=\"monitor_selection_dropdown\" onchange=\"displayMonitorsFrom(this)\"></select>");

var dropdown = $("#monitor_selection_dropdown");
dropdown.append("<option disabled selected>Select your only monitor option!</option>");

for (value in monitors.all)
    dropdown.append("<option value=\"" + value + "\">" + monitors.keys[value] + "</option>");

function displayMonitorsFrom(dropdown)
{
  $("#monitor_selection_output").text(monitors.keys[dropdown.value]);
  user.monitor_answer = monitors.keys[dropdown.value]
  console.log(user.monitor_answer)
}

// Level Selection
var level = enumerate("Familiar", "Good", "Expert");

var label = $("#level_selection_label");
label.append("<select id=\"level_selection_dropdown\" onchange=\"displayLevelFrom(this)\"></select>");

var dropdown = $("#level_selection_dropdown");
dropdown.append("<option disabled selected>Select your level!</option>");

for (value in level.all)
    dropdown.append("<option value=\"" + value + "\">" + level.keys[value] + "</option>");

function displayLevelFrom(dropdown)
{
  $("#level_selection_output").text(level.keys[dropdown.value]);
  user.level_answer = level.keys[dropdown.value]
  console.log(user.level_answer)
}

// Training Type Selection
var trainingType = enumerate("None", "Informal", "Formal", "External");

var label = $("#training_type_selection_label");
label.append("<select id=\"training_type_selection_dropdown\" onchange=\"displayTrainingTypeFrom(this)\"></select>");

var dropdown = $("#training_type_selection_dropdown");
dropdown.append("<option disabled selected>Select your training type!</option>");

for (value in trainingType.all)
    dropdown.append("<option value=\"" + value + "\">" + trainingType.keys[value] + "</option>");

function displayTrainingTypeFrom(dropdown)
{
  $("#training_type_selection_output").text(trainingType.keys[dropdown.value]);
  user.training_type_answer = trainingType.keys[dropdown.value]
  console.log(user.training_type_answer)
}

// Paid Time Off Selection
var paidTimeOff = enumerate("Accrued", "Unlimited");

var label = $("#pto_selection_label");
label.append("<select id=\"pto_selection_dropdown\" onchange=\"displayPaidTimeOffFrom(this)\"></select>");

var dropdown = $("#pto_selection_dropdown");
dropdown.append("<option disabled selected>Select your PTO option!</option>");

for (value in paidTimeOff.all)
    dropdown.append("<option value=\"" + value + "\">" + paidTimeOff.keys[value] + "</option>");

function displayPaidTimeOffFrom(dropdown)
{
  $("#pto_selection_output").text(paidTimeOff.keys[dropdown.value]);
  user.pto_answer = paidTimeOff.keys[dropdown.value]
  console.log(user.pto_answer)
}

// Compare the user inputs with job requirements 
var numberOfMatches = 0;

function answerAll() {
  if (user.employment_answer == "") {
    alert("Please select an employment answer")
    return
  } 
  if (user.experience_answer == "") {
    alert("Please select experience")
    return
  }
  if (user.companysize_answer == "") {
    alert("Please select company size")
    return
  }
  if (user.versioncontrol_answer == "") {
    alert("Please select version control")
    return
  } 
  if (user.issuetracker_answer == "") {
    alert("Please select issue tracker")
    return
  } 
  if (user.buildserver_answer == "") {
    alert("Please select build server")
    return
  } 
  if (user.codeanalysis_answer == "") {
    alert("Please select code analysis")
    return
  } 
  if (user.knowledgerepo_answer == "") {
    alert("Please select knowledge repository")
    return
  } 
  if (user.traveloptions_answer == "") {
    alert("Please select travel option")
    return
  } 
  if (user.schedule_answer == "") {
    alert("Please select schedule")
    return
  } 
  if (user.remotework_answer == "") {
    alert("Please select an remote work preference")
    return
  } 
  if (user.relocation_answer == "") {
    alert("Please select relocation preference")
    return
  }
  if (user.operating_system_answer == "") {
    alert("Please select operating system")
    return
  }  
  if (user.machine_type_answer == "") {
    alert("Please select machine type")
    return
  } 
  if (user.monitor_answer == "") {
    alert("Please select monitor preference")
    return
  } 
  if (user.level_answer == "") {
    alert("Please select level")
    return
  } 
  if (user.training_type_answer == "") {
    alert("Please select training type")
    return
  } 
  if (user.pto_answer == "") {
    alert("Please select paid time off preference ")
    return
  }
  console.log("function is working")
}

// function compareUserToJob() {
//   if user.employment_answer = "Permanent" {
//     numberOfMatches + 1
//     console.log(numberOfMatches)
//   }
// }


// Original Gridium code
var job = {
	"headline": "Gridium Front-end Developer",
	"essentials": {
		"locations": "denver",
        "employment": EmploymentType().Permanent,
        "experience": [ExperienceLevels().Junior, ExperienceLevels().Seasoned],
		"startdate": (new Date()).getTime(),
		"companysize": CompanySize().TenToTwenty,
		"teamsize": { "min": 1, "max": 6 },
	},
	"methodology": {
		"codereviews": true,
		"prototyping": true,
		"failfast": true,
		"unittests": true,
		"integrationtests": true,
		"buildserver": BuildServers().CircleCI,
		"staticcodeanalysis": CodeAnalysisTools().NotYetChosen,
		"versioncontrol": VersionControlSystem().Git,
		"issuetracker": IssueTrackers().Tikkit,
		"standups": true,
		"quickstart": true,
		"commitondayone": true,
	},
	"specs": {
		"workload": 1.0,
		"workweek": 40,
        "schedule": ScheduleOptions().Flexible,
        "remote": RemoteWorking().Required,
        "pto": PTO().Unlimited
	},
	"profile": {
		"newfeatures": 50,
		"clientsupport": 9,
		"documentation": 10,
		"maintenance": 30,
		"meetings": 1,
	},
	"equipment": {
		"operatingsystem": [OperationSystems().MacOSX, OperationSystems().CentOS],
		"computer": MachineType().Laptop,
	},
	"technologies": {
        "css3": Level().Good,
        "html5": Level().Good,
        "javascript": Level().Good,
        "node": Level().Good,
        "rest": Level().Good,
        "uiux": Level().Familiar,
        "design": Level().Familiar,
        "testing": {
            "oneof": {
                "junit": Level().Good,
                "mocha": Level().Good,
                "jasmine": Level().Good,
                "selenium": Level().Good,
            }
        },
        "framework": {
            "oneof": {
                "react": Level().Familiar,
                "vue": Level().Familiar,
                "angular": Level().Familiar,
            }
        },
        "boardgames": Level().Familiar,
    },
	"other": [
        "we love technology",
        "we solve interesting problems"
	]
}

function EmploymentType() { return enumerate("Permanent", "Temporary", "Project"); }
function ExperienceLevels() { return enumerate("Junior", "Seasoned", "Lead", "GrayBeard"); }
function CompanySize() { return enumerate("LessThanTen", "TenToTwenty", "TwentyToFifty", "FiftyToTwoHundred", "MoreThanTwoHundred"); }
function VersionControlSystem() { return enumerate("NotYetChosen", "Git", "BitBucket"); }
function IssueTrackers() { return enumerate("NotYetChosen", "GitHub", "Jira", "Tikkit"); }
function BuildServers() { return enumerate("NotYetChosen", "Jenkins", "Travis", "Codeship", "CircleCI"); }
function CodeAnalysisTools() { return enumerate("NotYetChosen", "ESLint"); }
function KnowledgeRepos() { return enumerate("NotYetChosen", "GitHubWiki", "Confluence"); }
function TravelOptions() { return enumerate("None", "Possible", "Plentiful"); }
function ScheduleOptions() { return enumerate("Fixed", "Flexible"); }
function RemoteWorking() { return enumerate("No", "Negotiable", "Required"); }
function RelocationPackages() { return enumerate("Nonealse", "Negotiable"); }
function OperationSystems() { return enumerate("MacOSX", "CentOS", "Ubuntu", "Windows"); }
function MachineType() { return enumerate("Workstation", "Laptop"); }
function Monitors() { return enumerate("Negotiable"); }
function Level() { return enumerate("Familiar", "Good", "Expert"); }
function TrainingType() { return enumerate("None", "Informal", "Formal", "External"); }
function PTO() { return enumerate("Accrued", "Unlimited") }

// https://github.com/RougeWare/Micro-JS-Enum/tree/master/lib
function enumerate() { v=arguments;s={all:[],keys:v};for(i=v.length;i--;)s[v[i]]=s.all[i]=v[i];return s };



// var user = {
//     employment_answer:
//     experience_answer:
//     companysize_answer:
//     versioncontrol_answer:
//     issuetracker_answer:
//     buildserver_answer:
//     codeanalysis_answer:
//     knowledgerepo_answer:
//     traveloptions_answer:
//     schedule_answer:
//     remotework_answer:
// }
