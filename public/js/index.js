// Hey Nick! I hope you like my project! Let me know if you have any questions. james9446@gmail.com

// Object for storing user answers
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

// ----==== Employment type selection ====----- //
// Variable for storing enumeration options
var employmentType = enumerate("Permanent", "Temporary", "Project");

// Targets the specific label that will have this drop-down
var label = $("#employment_selection_label");

// Drop-down starts with preset text and then appends the user selection by calling display function
label.append("<select id=\"employment_selection_dropdown\" onchange=\"displayEmploymentFrom(this)\"></select>");

// Variable for storing drop-down value
var dropdown = $("#employment_selection_dropdown");

// Adds the preset text to the drop-down before selection is made
dropdown.append("<option disabled selected>Select employment type!</option>");

// Determines the user selected value from the drop-down and appends it to the dropdown variable
for (value in employmentType.all)
    dropdown.append("<option value=\"" + value + "\">" + employmentType.keys[value] + "</option>");

// Essential display function with dropdown varaible as parameter 
function displayEmploymentFrom(dropdown)
{
  // Stores the selected drop-down value in user object
  user.employment_answer = employmentType.keys[dropdown.value]
}

// ----==== Employment type selection ====---- // 
// Variable for storing enumeration options
var experienceLevels = enumerate("Junior", "Seasoned", "Lead", "GrayBeard");

// Targets the specific label that will have this drop-down
var label = $("#experience_selection_label");

// Drop-down starts with preset text and then appends the user selection by calling display function 
label.append("<select id=\"experience_selection_dropdown\" onchange=\"displayExperienceFrom(this)\"></select>");

// Variable for storing drop-down value
var dropdown = $("#experience_selection_dropdown");

// Adds the preset text to the drop-down before selection is made
dropdown.append("<option disabled selected>Select experience level type!</option>");

// Determines the user selected value from the drop-down and appends it to the dropdown variable 
for (value in experienceLevels.all)
    dropdown.append("<option value=\"" + value + "\">" + experienceLevels.keys[value] + "</option>");

// Essential display function with dropdown varaible as parameter
function displayExperienceFrom(dropdown)
{
  // Stores the selected drop-down value in user object
  user.experience_answer = experienceLevels.keys[dropdown.value]
}

// ----==== Company Size Selection ====---- //
// Variable for storing enumeration options
var companySize = enumerate("LessThanTen", "TenToTwenty", "TwentyToFifty", "FiftyToTwoHundred", "MoreThanTwoHundred");

// Targets the specific label that will have this drop-down
var label = $("#company_size_selection_label");

// Drop-down starts with preset text and then appends the user selection by calling display function 
label.append("<select id=\"company_size_selection_dropdown\" onchange=\"displayCompanySizeFrom(this)\"></select>");

// Variable for storing drop-down value
var dropdown = $("#company_size_selection_dropdown");

// Adds the preset text to the drop-down before selection is made
dropdown.append("<option disabled selected>Select desired company size!</option>");

// Determines the user selected value from the drop-down and appends it to the dropdown variable
for (value in companySize.all)
    dropdown.append("<option value=\"" + value + "\">" + companySize.keys[value] + "</option>");

// Essential display function with dropdown varaible as parameter
function displayCompanySizeFrom(dropdown)
{
  // Stores the selected drop-down value in user object
  user.companysize_answer = companySize.keys[dropdown.value]
}

// ----==== Version Control Selection ====---- //
// Variable for storing enumeration options
var versionControlSystem = enumerate("NotYetChosen", "Git", "BitBucket");

// Targets the specific label that will have this drop-down
var label = $("#version_control_selection_label");

// Drop-down starts with preset text and then appends the user selection by calling display function
label.append("<select id=\"version_control_selection_dropdown\" onchange=\"displayVersionControlSystemFrom(this)\"></select>");

// Variable for storing drop-down value
var dropdown = $("#version_control_selection_dropdown");

// Adds the preset text to the drop-down before selection is made
dropdown.append("<option disabled selected>Select your VCS!</option>");

// Determines the user selected value from the drop-down and appends it to the dropdown variable
for (value in versionControlSystem.all)
    dropdown.append("<option value=\"" + value + "\">" + versionControlSystem.keys[value] + "</option>");

// Essential display function with dropdown varaible as parameter
function displayVersionControlSystemFrom(dropdown)
{
  // Stores the selected drop-down value in user object
  user.versioncontrol_answer = versionControlSystem.keys[dropdown.value]
}

// ----==== Issue Tracker Selection ====---- //
// Variable for storing enumeration options
var issueTrackers = enumerate("NotYetChosen", "GitHub", "Jira", "Tikkit");

// Targets the specific label that will have this drop-down
var label = $("#issue_tracker_selection_label");

// Drop-down starts with preset text and then appends the user selection by calling display function
label.append("<select id=\"issue_tracker_selection_dropdown\" onchange=\"displayIssueTrackersFrom(this)\"></select>");

// Variable for storing drop-down value
var dropdown = $("#issue_tracker_selection_dropdown");

// Adds the preset text to the drop-down before selection is made
dropdown.append("<option disabled selected>Select your issue tracker!</option>");

// Determines the user selected value from the drop-down and appends it to the dropdown variable
for (value in issueTrackers.all)
    dropdown.append("<option value=\"" + value + "\">" + issueTrackers.keys[value] + "</option>");

// Essential display function with dropdown varaible as parameter
function displayIssueTrackersFrom(dropdown)
{
  // Stores the selected drop-down value in user object
  user.issuetracker_answer = issueTrackers.keys[dropdown.value]
}

// ----==== Build Server Selection ====---- //
// Variable for storing enumeration options
var buildServers = enumerate("NotYetChosen", "Jenkins", "Travis", "Codeship", "CircleCI");

// Targets the specific label that will have this drop-down
var label = $("#build_server_selection_label");

// Drop-down starts with preset text and then appends the user selection by calling display function
label.append("<select id=\"build_server_selection_dropdown\" onchange=\"displayBuildServersFrom(this)\"></select>");

// Variable for storing drop-down value
var dropdown = $("#build_server_selection_dropdown");

// Adds the preset text to the drop-down before selection is made
dropdown.append("<option disabled selected>Select your build server!</option>");

// Determines the user selected value from the drop-down and appends it to the dropdown variable
for (value in buildServers.all)
    dropdown.append("<option value=\"" + value + "\">" + buildServers.keys[value] + "</option>");

// Essential display function with dropdown varaible as parameter
function displayBuildServersFrom(dropdown)
{
  // Stores the selected drop-down value in user object
  user.buildserver_answer = buildServers.keys[dropdown.value]
}

// ----==== Analysis Tool Selection ====---- //
// Variable for storing enumeration options
var codeAnalysisTools = enumerate("NotYetChosen", "ESLint");

// Targets the specific label that will have this drop-down
var label = $("#code_analysis_tool_selection_label");

// Drop-down starts with preset text and then appends the user selection by calling display function
label.append("<select id=\"code_analysis_tool_selection_dropdown\" onchange=\"displayCodeAnalysisToolsFrom(this)\"></select>");

// Variable for storing drop-down value
var dropdown = $("#code_analysis_tool_selection_dropdown");

// Adds the preset text to the drop-down before selection is made
dropdown.append("<option disabled selected>Select your code analysis tool!</option>");

// Determines the user selected value from the drop-down and appends it to the dropdown variable
for (value in codeAnalysisTools.all)
    dropdown.append("<option value=\"" + value + "\">" + codeAnalysisTools.keys[value] + "</option>");

// Essential display function with dropdown varaible as parameter
function displayCodeAnalysisToolsFrom(dropdown)
{
  // Stores the selected drop-down value in user object
  user.codeanalysis_answer = codeAnalysisTools.keys[dropdown.value]
}

// ----==== Knowledge Repository Selection ====---- //
// Variable for storing enumeration options
var knowledgeRepos = enumerate("NotYetChosen", "GitHubWiki", "Confluence");

// Targets the specific label that will have this drop-down
var label = $("#knowledge_repo_selection_label");

// Drop-down starts with preset text and then appends the user selection by calling display function
label.append("<select id=\"knowledge_repo_selection_dropdown\" onchange=\"displayKnowledgeReposFrom(this)\"></select>");

// Variable for storing drop-down value
var dropdown = $("#knowledge_repo_selection_dropdown");

// Adds the preset text to the drop-down before selection is made
dropdown.append("<option disabled selected>Select your knowledge repository!</option>");

// Determines the user selected value from the drop-down and appends it to the dropdown variable
for (value in knowledgeRepos.all)
    dropdown.append("<option value=\"" + value + "\">" + knowledgeRepos.keys[value] + "</option>");

// Essential display function with dropdown varaible as parameter
function displayKnowledgeReposFrom(dropdown)
{
  // Stores the selected drop-down value in user object
  user.knowledgerepo_answer = knowledgeRepos.keys[dropdown.value]
}

// ----==== Travel Options Selection ====---- // 
// Variable for storing enumeration options
var travelOptions = enumerate("None", "Possible", "Plentiful");

// Targets the specific label that will have this drop-down
var label = $("#travel_options_selection_label");

// Drop-down starts with preset text and then appends the user selection by calling display function
label.append("<select id=\"travel_options_selection_dropdown\" onchange=\"displaytTavelOptionsFrom(this)\"></select>");

// Variable for storing drop-down value
var dropdown = $("#travel_options_selection_dropdown");

// Adds the preset text to the drop-down before selection is made
dropdown.append("<option disabled selected>Select your travel option!</option>");

// Determines the user selected value from the drop-down and appends it to the dropdown variable
for (value in travelOptions.all)
    dropdown.append("<option value=\"" + value + "\">" + travelOptions.keys[value] + "</option>");

// Essential display function with dropdown varaible as parameter
function displaytTavelOptionsFrom(dropdown)
{
  // Stores the selected drop-down value in user object
  user.traveloptions_answer = travelOptions.keys[dropdown.value]
}

// ----==== Schedule Options Selection ====---- //
// Variable for storing enumeration options
var scheduleOptions = enumerate("Fixed", "Flexible");

// Targets the specific label that will have this drop-down
var label = $("#schedule_options_selection_label");

// Drop-down starts with preset text and then appends the user selection by calling display function
label.append("<select id=\"schedule_options_selection_dropdown\" onchange=\"displayScheduleOptionsFrom(this)\"></select>");

// Variable for storing drop-down value
var dropdown = $("#schedule_options_selection_dropdown");

// Adds the preset text to the drop-down before selection is made
dropdown.append("<option disabled selected>Select your schedule availability!</option>");

// Determines the user selected value from the drop-down and appends it to the dropdown variable
for (value in scheduleOptions.all)
    dropdown.append("<option value=\"" + value + "\">" + scheduleOptions.keys[value] + "</option>");

// Essential display function with dropdown varaible as parameter
function displayScheduleOptionsFrom(dropdown)
{
  // Stores the selected drop-down value in user object
  user.schedule_answer = scheduleOptions.keys[dropdown.value]
}

// ----==== Remote Work Selection Selection ====---- //
// Variable for storing enumeration options
var remoteWorking = enumerate("No", "Negotiable", "Required");

// Targets the specific label that will have this drop-down
var label = $("#remote_work_selection_label");

// Drop-down starts with preset text and then appends the user selection by calling display function
label.append("<select id=\"remote_work_selection_dropdown\" onchange=\"displayRemoteWorkingFrom(this)\"></select>");

// Variable for storing drop-down value
var dropdown = $("#remote_work_selection_dropdown");

// Adds the preset text to the drop-down before selection is made
dropdown.append("<option disabled selected>Select your remote work option!</option>");

// Determines the user selected value from the drop-down and appends it to the dropdown variable
for (value in remoteWorking.all)
    dropdown.append("<option value=\"" + value + "\">" + remoteWorking.keys[value] + "</option>");

// Essential display function with dropdown varaible as parameter
function displayRemoteWorkingFrom(dropdown)
{
  // Stores the selected drop-down value in user object
  user.remotework_answer = remoteWorking.keys[dropdown.value]
}

// ----==== Operating System Selection ====---- // 
// Variable for storing enumeration options
var operationSystems = enumerate("MacOSX", "CentOS", "Ubuntu", "Windows");

// Targets the specific label that will have this drop-down
var label = $("#operating_system_selection_label");

// Drop-down starts with preset text and then appends the user selection by calling display function
label.append("<select id=\"operating_system_selection_dropdown\" onchange=\"displayOperationSystemsFrom(this)\"></select>");

// Variable for storing drop-down value
var dropdown = $("#operating_system_selection_dropdown");

// Adds the preset text to the drop-down before selection is made
dropdown.append("<option disabled selected>Select your operating system!</option>");

// Determines the user selected value from the drop-down and appends it to the dropdown variable
for (value in operationSystems.all)
    dropdown.append("<option value=\"" + value + "\">" + operationSystems.keys[value] + "</option>");

// Essential display function with dropdown varaible as parameter
function displayOperationSystemsFrom(dropdown)
{
  // Stores the selected drop-down value in user object
  user.operating_system_answer = operationSystems.keys[dropdown.value]
}

// ----==== Machine Type Selection ====---- // 
// Variable for storing enumeration options
var machineType = enumerate("Workstation", "Laptop");

// Targets the specific label that will have this drop-down
var label = $("#machine_type_selection_label");

// Drop-down starts with preset text and then appends the user selection by calling display function
label.append("<select id=\"machine_type_selection_dropdown\" onchange=\"displayMachineTypeFrom(this)\"></select>");

// Variable for storing drop-down value
var dropdown = $("#machine_type_selection_dropdown");

// Adds the preset text to the drop-down before selection is made
dropdown.append("<option disabled selected>Select your machine type!</option>");

// Determines the user selected value from the drop-down and appends it to the dropdown variable
for (value in machineType.all)
    dropdown.append("<option value=\"" + value + "\">" + machineType.keys[value] + "</option>");

// Essential display function with dropdown varaible as parameter
function displayMachineTypeFrom(dropdown)
{
  // Stores the selected drop-down value in user object
  user.machine_type_answer = machineType.keys[dropdown.value]
}

// ----==== Training Type Selection ====---- //
// Variable for storing enumeration options
var trainingType = enumerate("None", "Informal", "Formal", "External");

// Targets the specific label that will have this drop-down
var label = $("#training_type_selection_label");

// Drop-down starts with preset text and then appends the user selection by calling display function
label.append("<select id=\"training_type_selection_dropdown\" onchange=\"displayTrainingTypeFrom(this)\"></select>");

// Variable for storing drop-down value
var dropdown = $("#training_type_selection_dropdown");

// Adds the preset text to the drop-down before selection is made
dropdown.append("<option disabled selected>Select your training type!</option>");

// Determines the user selected value from the drop-down and appends it to the dropdown variable
for (value in trainingType.all)
    dropdown.append("<option value=\"" + value + "\">" + trainingType.keys[value] + "</option>");

// Essential display function with dropdown varaible as parameter
function displayTrainingTypeFrom(dropdown)
{
  // Stores the selected drop-down value in user object
  user.training_type_answer = trainingType.keys[dropdown.value]
}

// ----==== Paid Time Off Selection ====---- //
// Variable for storing enumeration options
var paidTimeOff = enumerate("Accrued", "Unlimited");

// Targets the specific label that will have this drop-down
var label = $("#pto_selection_label");

// Drop-down starts with preset text and then appends the user selection by calling display function
label.append("<select id=\"pto_selection_dropdown\" onchange=\"displayPaidTimeOffFrom(this)\"></select>");

// Variable for storing drop-down value
var dropdown = $("#pto_selection_dropdown");

// Adds the preset text to the drop-down before selection is made
dropdown.append("<option disabled selected>Select your PTO option!</option>");

// Determines the user selected value from the drop-down and appends it to the dropdown variable
for (value in paidTimeOff.all)
    dropdown.append("<option value=\"" + value + "\">" + paidTimeOff.keys[value] + "</option>");

// Essential display function with dropdown varaible as parameter
function displayPaidTimeOffFrom(dropdown)
{
  // Stores the selected drop-down value in user object
  user.pto_answer = paidTimeOff.keys[dropdown.value]
}

// This function is designed to make sure that every drop-down has been answered. 
// Rather than use a simple loop with a blanket alert message I made a bunch of if statements so I could create a unique message that specifies which drop-down wasn't selected
function checkAnswers() {
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
  if (user.operating_system_answer == "") {
    alert("Please select operating system")
    return
  }  
  if (user.machine_type_answer == "") {
    alert("Please select machine type")
    return
  }  
  if (user.training_type_answer == "") {
    alert("Please select training type")
    return
  } 
  if (user.pto_answer == "") {
    alert("Please select paid time off preference ")
    return
  }else {

    // This will convert the matchPercent into a more readable string
    compareUserToJob()
    matchPercent = (numberOfMatches/15);
    matchPercent = matchPercent.toString();
    var a = matchPercent.split(".");
    matchPercent = a[1];
    matchPercent = matchPercent.substr(0, 4);
    matchPercent = (matchPercent / 100) + "%";
    console.log(matchPercent)

    // Here is where the user gets the results of whether the users needs jibe with the company needs
    if (parseInt(matchPercent) > 80) {

      // Using an alert is obviously not the most elegant solution. 
      alert("Amazing! You are a " + matchPercent + " match for our front-end developer job at Gridium! You should definitely apply!")
      return
      numberOfMatches = 0;
    }
    if (parseInt(matchPercent) > 60) {
      alert("Alright! You are a " + matchPercent + " match for our front-end developer job at Gridium! You should apply.")
      numberOfMatches = 0;
      return
    }
    if (parseInt(matchPercent) > 49) {
      alert("Not bad. You are a " + matchPercent + " match for our front-end developer job at Gridium. You should think about applying.")
      numberOfMatches = 0;
      return
    }
    if (parseInt(matchPercent) < 49) {
      alert("Hmm. You are a " + matchPercent + " match for our front-end developer job at Gridium. Pehaps you should consider whether this would be the best fit for your needs.")
      numberOfMatches = 0;
      return
    } 
  }
}

// Variable for storing the number of selected drop-down answers that match 
var numberOfMatches = 0;

// Variable for storing the percentage that user answer match the prerequisites
var matchPercent = Math.round((numberOfMatches/18))

//This function is designed to determine if the selected answers match prerequisites for the position
function compareUserToJob() {
  if (user.employment_answer == "Permanent") {
    numberOfMatches ++
    console.log(numberOfMatches)
  }
  if (user.experience_answer == "Junior" || user.experience_answer == "Seasoned") {
    numberOfMatches ++
    console.log(numberOfMatches)
  }
  if (user.companysize_answer == "TenToTwenty") {
    numberOfMatches ++
    console.log(numberOfMatches)
  }
  if (user.versioncontrol_answer == "Git") {
    numberOfMatches ++
    console.log(numberOfMatches)
  }
  if (user.issuetracker_answer == "Tikkit") {
    numberOfMatches ++
    console.log(numberOfMatches)
  }
  if (user.buildserver_answer == "CircleCI") {
    numberOfMatches ++
    console.log(numberOfMatches)
  }
  if (user.codeanalysis_answer == "NotYetChosen") {
    numberOfMatches ++
    console.log(numberOfMatches)
  }
  if (user.knowledgerepo_answer == "GitHubWiki") {
    numberOfMatches ++
    console.log(numberOfMatches)
  }
  if (user.traveloptions_answer == "Possible" || user.traveloptions_answer == "Plentiful") {
    numberOfMatches ++
    console.log(numberOfMatches)
  }
  if (user.schedule_answer == "Flexible") {
    numberOfMatches ++
    console.log(numberOfMatches)
  }
  if (user.remotework_answer == "Negotiable" || user.remotework_answer == "Required") {
    numberOfMatches ++
    console.log(numberOfMatches)
  }
  if (user.relocation_answer == "Negotiable") {
    numberOfMatches ++
    console.log(numberOfMatches)
  }
  if (user.operating_system_answer == "MacOSX" || user.operating_system_answer == "CentOS") {
    numberOfMatches ++
    console.log(numberOfMatches)
  }
  if (user.machine_type_answer == "Laptop") {
    numberOfMatches ++
    console.log(numberOfMatches)
  }
  if (user.monitor_answer == "Negotiable") {
    numberOfMatches ++
    console.log(numberOfMatches)
  }
  if (user.level_answer == "Good" || user.level_answer == "Familiar") {
    numberOfMatches ++
    console.log(numberOfMatches)
  }
  if (user.training_type_answer == "Informal" || user.training_type_answer == "Formal") {
    numberOfMatches ++
    console.log(numberOfMatches)
  }
  if (user.pto_answer == "Unlimited") {
    numberOfMatches ++
    console.log(numberOfMatches)
  }
}

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