import { useState } from 'react';
import { ChevronDown, ChevronRight, User, Users, DollarSign, Heart, Baby } from 'lucide-react';

const UserFlows = () => {
  const [expandedRole, setExpandedRole] = useState<string | null>(null);
  const [expandedFlow, setExpandedFlow] = useState<string | null>(null);

  const roles = [
    {
      id: 'administrator',
      name: 'Administrator',
      icon: User,
      color: 'bg-purple-100 text-purple-700',
      flows: [
        {
          id: 'enrollment_setup',
          title: 'Setting Up New Program Enrollment',
          story: 'As an Administrator, I want to configure a new preschool program so that parents can apply and I can manage capacity effectively.',
          steps: [
            { stage: 'Entry', action: 'Login to admin dashboard', system: 'Display dashboard with program management option' },
            { stage: 'Navigate', action: 'Click "Program Management"', system: 'Show list of existing programs + "Add Program" button' },
            { stage: 'Create', action: 'Click "Add Program" and fill details (name, age range, capacity, tuition, schedule)', system: 'Validate inputs in real-time' },
            { stage: 'Configure', action: 'Set enrollment opening date and application requirements', system: 'Save program configuration' },
            { stage: 'Review', action: 'Preview public-facing registration form', system: 'Display form as parents would see it' },
            { stage: 'Publish', action: 'Activate program for enrollment', system: 'Generate program URL, send confirmation, update enrollment dashboard' },
            { stage: 'Exit', action: 'Return to dashboard', system: 'Show new program in active programs list' }
          ],
          touchpoints: ['Admin Dashboard', 'Program Management Module', 'Registration Form Builder', 'Enrollment Dashboard']
        },
        {
          id: 'manage_applications',
          title: 'Processing Enrollment Applications',
          story: 'As an Administrator, I want to review and process applications efficiently so that families receive timely responses and we maintain optimal capacity.',
          steps: [
            { stage: 'Entry', action: 'Receive notification of new application', system: 'Display notification badge on applications menu' },
            { stage: 'Review', action: 'Open applications dashboard', system: 'Show all applications filtered by status (Pending, Accepted, Waitlisted, Rejected)' },
            { stage: 'Evaluate', action: 'Click on pending application to view details', system: 'Display child info, parent info, program selection, submitted documents' },
            { stage: 'Check', action: 'Verify capacity in selected program', system: 'Show current enrollment count vs capacity' },
            { stage: 'Decide', action: 'Update status to Accepted/Waitlisted/Rejected with optional note', system: 'Validate decision and prepare notification' },
            { stage: 'Notify', action: 'Click "Send Decision"', system: 'Auto-generate email to parent, update dashboard, trigger next steps (invoice for accepted)' },
            { stage: 'Exit', action: 'Return to applications list', system: 'Update application count, show next pending application' }
          ],
          touchpoints: ['Notification System', 'Applications Dashboard', 'Child Profile', 'Email System', 'Enrollment Dashboard']
        },
        {
          id: 'user_management',
          title: 'Onboarding New Teacher',
          story: 'As an Administrator, I want to create teacher accounts with appropriate permissions so that new staff can access classroom tools immediately.',
          steps: [
            { stage: 'Entry', action: 'Navigate to User Management', system: 'Display all users by role (Admin, Teacher, Back Office, Parent)' },
            { stage: 'Create', action: 'Click "Add User" and select "Teacher" role', system: 'Show teacher-specific registration form' },
            { stage: 'Input', action: 'Enter teacher name, email, phone, assigned classroom', system: 'Validate email uniqueness, check classroom capacity' },
            { stage: 'Configure', action: 'Review auto-assigned permissions (attendance, messaging, milestone tracking)', system: 'Display permission summary' },
            { stage: 'Send', action: 'Click "Create Account"', system: 'Generate account, send welcome email with login credentials' },
            { stage: 'Verify', action: 'Confirm teacher received email', system: 'Show account status as "Pending Activation" until first login' },
            { stage: 'Exit', action: 'Return to user list', system: 'Add new teacher to active staff directory' }
          ],
          touchpoints: ['User Management Module', 'Email System', 'Permission Framework', 'Staff Directory']
        },
        {
          id: 'financial_oversight',
          title: 'Monthly Financial Review',
          story: 'As an Administrator, I want to review financial performance across programs so that I can identify revenue trends and address outstanding payments.',
          steps: [
            { stage: 'Entry', action: 'Navigate to Financial Reports', system: 'Display financial dashboard with key metrics' },
            { stage: 'Overview', action: 'View monthly revenue summary', system: 'Show total revenue, paid vs pending, overdue invoices by program' },
            { stage: 'Filter', action: 'Select specific program or date range', system: 'Update charts and tables with filtered data' },
            { stage: 'Analyze', action: 'Review payment trends and identify late payers', system: 'Highlight accounts with overdue balances' },
            { stage: 'Export', action: 'Click "Export Report" for accounting', system: 'Generate PDF/Excel with detailed transaction history' },
            { stage: 'Action', action: 'Flag accounts for follow-up', system: 'Create task for back-office staff to contact parents' },
            { stage: 'Exit', action: 'Save report and return to dashboard', system: 'Archive report with timestamp' }
          ],
          touchpoints: ['Financial Dashboard', 'Reports Module', 'Invoice System', 'Task Management']
        }
      ]
    },
    {
      id: 'teacher',
      name: 'Teacher',
      icon: Users,
      color: 'bg-blue-100 text-blue-700',
      flows: [
        {
          id: 'daily_attendance',
          title: 'Morning Attendance & Check-In',
          story: 'As a Teacher, I want to quickly verify attendance as children arrive so that I have accurate records and can identify absences early.',
          steps: [
            { stage: 'Entry', action: 'Open attendance module on mobile/tablet', system: 'Display classroom roster with today\'s status' },
            { stage: 'Check-In', action: 'Parent checks in child via app OR teacher manually marks present', system: 'Update status to "Present" with timestamp' },
            { stage: 'Verify', action: 'Confirm child details if parent-initiated check-in', system: 'Show notification requiring teacher verification' },
            { stage: 'Note', action: 'Add notes if child seems unwell or parent mentions something', system: 'Attach note to child\'s daily record' },
            { stage: 'Monitor', action: 'View real-time attendance count', system: 'Display present/absent/late counts for the classroom' },
            { stage: 'Alert', action: 'System flags absent children without notification', system: 'Send automated absence notification to parents' },
            { stage: 'Exit', action: 'Close attendance, begin day\'s activities', system: 'Lock attendance after grace period, generate attendance report' }
          ],
          touchpoints: ['Mobile App', 'Attendance Module', 'Parent App', 'Notification System', 'Daily Reports']
        },
        {
          id: 'milestone_tracking',
          title: 'Recording Developmental Milestone',
          story: 'As a Teacher, I want to log milestones I observe during activities so that parents stay informed and we maintain accurate developmental records.',
          steps: [
            { stage: 'Entry', action: 'Observe child achieving milestone (e.g., stacking blocks independently)', system: 'N/A - organic observation' },
            { stage: 'Navigate', action: 'Open child\'s profile and select "Milestones"', system: 'Display CDC milestone categories by age group' },
            { stage: 'Select', action: 'Choose relevant milestone (e.g., Fine Motor Skills)', system: 'Show specific milestones under category' },
            { stage: 'Record', action: 'Mark milestone as achieved, add observation note', system: 'Timestamp entry, link to current activity if applicable' },
            { stage: 'Attach', action: 'Upload photo or video of achievement (optional)', system: 'Process and store media securely' },
            { stage: 'Review', action: 'View milestone progress visualization', system: 'Display child\'s progress vs CDC expectations and peer benchmarks' },
            { stage: 'Share', action: 'Click "Share with Parent"', system: 'Send notification to parent with milestone details and media' },
            { stage: 'Exit', action: 'Return to classroom view', system: 'Update child\'s developmental dashboard, trigger AI analysis if pattern detected' }
          ],
          touchpoints: ['Child Profile', 'Milestone Module', 'CDC Framework', 'Media Storage', 'Parent Notification', 'AI Analysis Engine']
        },
        {
          id: 'daily_summary',
          title: 'End-of-Day Report Generation',
          story: 'As a Teacher, I want to quickly generate and send daily summaries to parents so that they stay informed without me spending hours on reports.',
          steps: [
            { stage: 'Entry', action: 'Navigate to Daily Summary at end of day', system: 'Display AI-generated draft summary for each child' },
            { stage: 'Review', action: 'Read AI-compiled summary (meals, naps, activities, mood)', system: 'Present summary with timestamps and recorded data' },
            { stage: 'Edit', action: 'Add personal observations or adjust AI-generated text', system: 'Update summary in real-time' },
            { stage: 'Attach', action: 'Add photos from the day\'s activities', system: 'Link photos to specific activities mentioned in summary' },
            { stage: 'Preview', action: 'View parent-facing version', system: 'Display formatted report as parents will see it' },
            { stage: 'Send', action: 'Click "Send to Parents" for all children or individually', system: 'Deliver reports via app notification and email' },
            { stage: 'Confirm', action: 'Verify delivery status', system: 'Show "Sent" status with timestamp for each parent' },
            { stage: 'Exit', action: 'Log out or prepare for next day', system: 'Archive reports, reset daily logs for tomorrow' }
          ],
          touchpoints: ['Daily Summary Module', 'AI Summary Engine', 'Photo Gallery', 'Parent Portal', 'Email System', 'Notification System']
        },
        {
          id: 'incident_reporting',
          title: 'Logging and Reporting Incident',
          story: 'As a Teacher, I want to immediately report incidents so that parents are informed and we maintain proper documentation.',
          steps: [
            { stage: 'Incident', action: 'Child falls and gets minor scrape', system: 'N/A - real-world event' },
            { stage: 'Entry', action: 'Open incident reporting on mobile', system: 'Display quick incident report form' },
            { stage: 'Classify', action: 'Select incident type (injury, behavioral, medical)', system: 'Show relevant fields based on type' },
            { stage: 'Detail', action: 'Describe what happened, where, when, who was involved', system: 'Timestamp entry, associate with child profile' },
            { stage: 'Document', action: 'Take photo of injury/scene (if applicable)', system: 'Upload and attach to incident report' },
            { stage: 'Action', action: 'Note first aid provided or actions taken', system: 'Record response details' },
            { stage: 'Notify', action: 'Click "Notify Parent Immediately"', system: 'Send instant notification to parent with incident details' },
            { stage: 'Follow-Up', action: 'Add follow-up notes later in day', system: 'Update incident report with additional observations' },
            { stage: 'Exit', action: 'Submit final report', system: 'Archive in child\'s safety log, flag for admin review if serious' }
          ],
          touchpoints: ['Mobile App', 'Incident Module', 'Child Profile', 'Photo Upload', 'Parent Notification', 'Admin Dashboard']
        },
        {
          id: 'parent_messaging',
          title: 'Responding to Parent Question',
          story: 'As a Teacher, I want to communicate with parents through a secure channel so that conversations stay organized and professional.',
          steps: [
            { stage: 'Entry', action: 'Receive notification of parent message', system: 'Display unread message badge in messaging module' },
            { stage: 'Read', action: 'Open message from parent (e.g., asking about child\'s nap schedule)', system: 'Show message thread with child context' },
            { stage: 'Context', action: 'View child\'s recent nap data', system: 'Display quick view of relevant logs (nap times, duration)' },
            { stage: 'Respond', action: 'Type reply with details and reassurance', system: 'Support text formatting, emoji if appropriate' },
            { stage: 'Attach', action: 'Optionally attach photo of child napping peacefully', system: 'Upload and preview attachment' },
            { stage: 'Send', action: 'Click "Send"', system: 'Deliver message, notify parent via push notification' },
            { stage: 'Track', action: 'See "Read" receipt when parent opens message', system: 'Update message status' },
            { stage: 'Exit', action: 'Return to classroom view', system: 'Archive conversation in message history' }
          ],
          touchpoints: ['Messaging System', 'Notification System', 'Child Profile', 'Activity Logs', 'Parent App']
        }
      ]
    },
    {
      id: 'backoffice',
      name: 'Back Office Staff',
      icon: DollarSign,
      color: 'bg-green-100 text-green-700',
      flows: [
        {
          id: 'invoice_creation',
          title: 'Generating Monthly Invoices',
          story: 'As Back Office Staff, I want to create and send invoices efficiently so that parents receive timely billing and we maintain cash flow.',
          steps: [
            { stage: 'Entry', action: 'Navigate to Billing Module', system: 'Display invoice management dashboard' },
            { stage: 'Generate', action: 'Select "Generate Monthly Invoices"', system: 'Show list of enrolled children by program' },
            { stage: 'Review', action: 'Verify tuition amounts and any adjustments', system: 'Display default tuition + any credits/fees per child' },
            { stage: 'Customize', action: 'Add late fees, sibling discounts, or special charges', system: 'Update invoice amounts in real-time' },
            { stage: 'Preview', action: 'Review sample invoice', system: 'Show parent-facing invoice format with breakdown' },
            { stage: 'Batch', action: 'Click "Generate All Invoices"', system: 'Create invoices for all enrolled children, set status to "Pending"' },
            { stage: 'Notify', action: 'Click "Send to Parents"', system: 'Email invoices with payment instructions, send app notifications' },
            { stage: 'Monitor', action: 'Track invoice status on dashboard', system: 'Display Paid/Pending/Overdue counts' },
            { stage: 'Exit', action: 'Set reminders for follow-up on overdue accounts', system: 'Schedule automated reminders' }
          ],
          touchpoints: ['Billing Module', 'Invoice Generator', 'Email System', 'Parent Portal', 'Payment Dashboard']
        },
        {
          id: 'payment_verification',
          title: 'Verifying Manual Payment',
          story: 'As Back Office Staff, I want to verify and record payments made outside the platform so that financial records stay accurate.',
          steps: [
            { stage: 'Entry', action: 'Receive notification that parent uploaded payment proof', system: 'Display notification with pending verification badge' },
            { stage: 'Navigate', action: 'Open invoice marked "Proof Uploaded"', system: 'Show invoice details with uploaded payment screenshot/file' },
            { stage: 'Review', action: 'Examine payment proof (bank transfer, receipt)', system: 'Display uploaded file in viewer' },
            { stage: 'Verify', action: 'Cross-check amount, date, and transaction ID against bank records', system: 'Provide fields to enter verification notes' },
            { stage: 'Match', action: 'Confirm payment matches invoice amount', system: 'Highlight any discrepancies' },
            { stage: 'Mark', action: 'Update invoice status to "Paid" with payment date', system: 'Lock invoice, timestamp payment' },
            { stage: 'Notify', action: 'System sends confirmation to parent', system: 'Auto-generate payment confirmation email with receipt' },
            { stage: 'Record', action: 'Payment reflected in financial dashboard', system: 'Update revenue metrics, clear overdue status' },
            { stage: 'Exit', action: 'Return to pending payments list', system: 'Remove from verification queue' }
          ],
          touchpoints: ['Invoice Module', 'Payment Verification Queue', 'File Viewer', 'Financial Dashboard', 'Email System']
        },
        {
          id: 'enrollment_record_management',
          title: 'Updating Child Enrollment Status',
          story: 'As Back Office Staff, I want to update enrollment records when children start or leave so that billing and classroom capacity stay accurate.',
          steps: [
            { stage: 'Entry', action: 'Navigate to Enrollment Records', system: 'Display all enrolled children by status (Active, Pending Start, Withdrawn)' },
            { stage: 'Select', action: 'Search for child whose status needs updating', system: 'Show child profile with current enrollment details' },
            { stage: 'Update', action: 'Change status (e.g., from Pending to Active on start date)', system: 'Validate date, check classroom capacity' },
            { stage: 'Adjust', action: 'Set start/end date and prorated billing if mid-month', system: 'Calculate prorated amount automatically' },
            { stage: 'Notify', action: 'System alerts relevant parties (teacher, admin, parent)', system: 'Send multi-channel notifications' },
            { stage: 'Billing', action: 'System adjusts future invoice generation', system: 'Add/remove child from billing schedule' },
            { stage: 'Capacity', action: 'Classroom capacity updated in real-time', system: 'Update program enrollment dashboard' },
            { stage: 'Exit', action: 'Confirm changes saved', system: 'Show updated status, archive audit log' }
          ],
          touchpoints: ['Enrollment Module', 'Child Profile', 'Billing System', 'Notification System', 'Capacity Management']
        },
        {
          id: 'financial_reporting',
          title: 'Generating Financial Report for Admin',
          story: 'As Back Office Staff, I want to create comprehensive financial reports so that administrators can make informed business decisions.',
          steps: [
            { stage: 'Entry', action: 'Navigate to Financial Reports', system: 'Display report templates and date range selector' },
            { stage: 'Configure', action: 'Select report type (Monthly Revenue, Outstanding Balances, Program Performance)', system: 'Show relevant filter options' },
            { stage: 'Filter', action: 'Set date range and program filters', system: 'Preview data summary' },
            { stage: 'Generate', action: 'Click "Generate Report"', system: 'Compile data from invoices, payments, enrollment records' },
            { stage: 'Review', action: 'Examine charts and tables', system: 'Display revenue trends, payment status breakdown, overdue accounts' },
            { stage: 'Analyze', action: 'Identify patterns (e.g., programs with high late payments)', system: 'Highlight insights with AI-suggested notes' },
            { stage: 'Export', action: 'Choose format (PDF, Excel, CSV)', system: 'Generate downloadable file' },
            { stage: 'Share', action: 'Email report to administrator or save to shared drive', system: 'Send via email with access link' },
            { stage: 'Exit', action: 'Archive report for future reference', system: 'Save report with timestamp in report library' }
          ],
          touchpoints: ['Financial Reports Module', 'Data Analytics', 'Export System', 'Email System', 'Report Archive']
        }
      ]
    },
    {
      id: 'parent',
      name: 'Parent',
      icon: Heart,
      color: 'bg-pink-100 text-pink-700',
      flows: [
        {
          id: 'application_submission',
          title: 'Applying for Childcare Program',
          story: 'As a Parent, I want to apply for my child\'s enrollment online so that I can complete the process conveniently without visiting in person.',
          steps: [
            { stage: 'Entry', action: 'Receive enrollment link or visit center website', system: 'Display available programs with details' },
            { stage: 'Browse', action: 'Review program options (age groups, schedules, tuition)', system: 'Show program cards with key information' },
            { stage: 'Select', action: 'Choose desired program', system: 'Open online registration form' },
            { stage: 'Guardian Info', action: 'Fill in parent/guardian details (name, email, phone, address)', system: 'Validate email and phone format' },
            { stage: 'Child Info', action: 'Enter child details (name, DOB, gender, health info)', system: 'Calculate appropriate age group automatically' },
            { stage: 'Upload', action: 'Upload required documents (immunization records, ID)', system: 'Accept PDF/image files, validate size' },
            { stage: 'Emergency', action: 'Add emergency contacts', system: 'Require at least one backup contact' },
            { stage: 'Review', action: 'Preview submitted information', system: 'Display summary with edit option' },
            { stage: 'Submit', action: 'Click "Submit Application"', system: 'Generate application ID, send confirmation email' },
            { stage: 'Wait', action: 'Receive notification of application review timeline', system: 'Set status to "Pending", notify admin' },
            { stage: 'Exit', action: 'Create account to track application status', system: 'Generate parent portal access' }
          ],
          touchpoints: ['Public Website', 'Registration Form', 'Document Upload', 'Email System', 'Parent Portal']
        },
        {
          id: 'daily_monitoring',
          title: 'Checking Child\'s Daily Updates',
          story: 'As a Parent, I want to view my child\'s daily activities so that I feel connected and informed throughout the day.',
          steps: [
            { stage: 'Entry', action: 'Open Zornicare mobile app during lunch break', system: 'Display parent dashboard with today\'s updates' },
            { stage: 'Overview', action: 'See quick summary (check-in time, meals, nap status)', system: 'Show real-time status cards' },
            { stage: 'Activities', action: 'Tap "Today\'s Activities" to see details', system: 'Display timeline of recorded activities with timestamps' },
            { stage: 'Photos', action: 'View photos uploaded by teacher', system: 'Show gallery of today\'s moments' },
            { stage: 'Milestones', action: 'Notice notification about new milestone achieved', system: 'Display milestone card with teacher\'s note and photo' },
            { stage: 'Respond', action: 'React with heart or comment to teacher', system: 'Send notification to teacher, record engagement' },
            { stage: 'Health', action: 'Check if any incidents or health notes', system: 'Display any flagged items prominently' },
            { stage: 'Exit', action: 'Feel reassured and close app', system: 'Track engagement for analytics' }
          ],
          touchpoints: ['Mobile App', 'Parent Dashboard', 'Activity Feed', 'Photo Gallery', 'Milestone Module', 'Messaging System']
        },
        {
          id: 'payment_submission',
          title: 'Paying Monthly Invoice',
          story: 'As a Parent, I want to easily view and pay my invoice so that I can stay current on payments without hassle.',
          steps: [
            { stage: 'Entry', action: 'Receive notification that new invoice is available', system: 'Send push notification + email with invoice amount' },
            { stage: 'Navigate', action: 'Open app and tap "View Invoice"', system: 'Display invoice details (tuition, fees, due date)' },
            { stage: 'Review', action: 'Check invoice breakdown and due date', system: 'Show itemized charges clearly' },
            { stage: 'Payment Method', action: 'Choose payment option (bank transfer since no integrated payment yet)', system: 'Display payment instructions and bank details' },
            { stage: 'Pay', action: 'Make payment through bank app/online banking', system: 'N/A - external action' },
            { stage: 'Upload', action: 'Return to app and tap "Upload Payment Proof"', system: 'Open file picker for screenshot/receipt' },
            { stage: 'Submit', action: 'Upload screenshot and click "Submit for Verification"', system: 'Send to back-office queue, update status to "Pending Verification"' },
            { stage: 'Wait', action: 'Receive notification when payment is verified', system: 'Back office verifies, system sends confirmation' },
            { stage: 'Confirm', action: 'View updated invoice status as "Paid"', system: 'Display payment confirmation with receipt' },
            { stage: 'Exit', action: 'Download receipt for records', system: 'Generate PDF receipt' }
          ],
          touchpoints: ['Mobile App', 'Billing Dashboard', 'Email System', 'File Upload', 'Back Office Queue', 'Receipt Generator']
        },
        {
          id: 'milestone_review',
          title: 'Reviewing Child\'s Developmental Progress',
          story: 'As a Parent, I want to understand my child\'s developmental progress so that I can support their growth at home.',
          steps: [
            { stage: 'Entry', action: 'Navigate to "Milestones" tab in app', system: 'Display milestone dashboard for child' },
            { stage: 'Overview', action: 'View visual progress chart', system: 'Show achieved vs expected milestones by category (Motor, Cognitive, Social, Language)' },
            { stage: 'Compare', action: 'See comparison with CDC standards for age', system: 'Display age-appropriate benchmarks with child\'s position' },
            { stage: 'Detail', action: 'Tap on specific category to see individual milestones', system: 'Show list of milestones with achievement dates and teacher notes' },
            { stage: 'Media', action: 'View photos/videos of milestone achievements', system: 'Display media attached by teacher' },
            { stage: 'Insights', action: 'Read AI-generated developmental insights', system: 'Show areas of strength and suggested focus areas' },
            { stage: 'Activities', action: 'Tap "Suggested Activities" for home practice', system: 'Display age-appropriate activities to support development' },
            { stage: 'Progress', action: 'View historical progress over months', system: 'Show timeline visualization of growth' },
            { stage: 'Exit', action: 'Feel informed and empowered', system: 'Track engagement, update parent analytics' }
          ],
          touchpoints: ['Mobile App', 'Milestone Dashboard', 'CDC Framework', 'AI Insights Engine', 'Activity Suggestions', 'Media Gallery']
        },
        {
          id: 'teacher_communication',
          title: 'Asking Teacher a Question',
          story: 'As a Parent, I want to message my child\'s teacher directly so that I can get quick answers without phone calls during work.',
          steps: [
            { stage: 'Entry', action: 'Notice child was fussy at pickup, want to understand why', system: 'N/A - real-world trigger' },
            { stage: 'Navigate', action: 'Open app and tap "Messages"', system: 'Display message threads with teachers' },
            { stage: 'Compose', action: 'Tap teacher name and type question about mood/nap', system: 'Show message composer with child context' },
            { stage: 'Send', action: 'Click "Send"', system: 'Deliver message, notify teacher via push notification' },
            { stage: 'Wait', action: 'Continue with evening activities', system: 'Teacher receives and responds when able' },
            { stage: 'Notify', action: 'Receive notification of teacher reply', system: 'Push notification with message preview' },
            { stage: 'Read', action: 'Open message to see teacher explanation', system: 'Display full response with any attached context (e.g., "had short nap today")' },
            { stage: 'Respond', action: 'Thank teacher and ask follow-up if needed', system: 'Continue threaded conversation' },
            { stage: 'Exit', action: 'Feel reassured and informed', system: 'Archive conversation in message history' }
          ],
          touchpoints: ['Mobile App', 'Messaging System', 'Notification System', 'Teacher App', 'Child Context Panel']
        }
      ]
    },
    {
      id: 'child',
      name: 'Child Profile',
      icon: Baby,
      color: 'bg-yellow-100 text-yellow-700',
      flows: [
        {
          id: 'profile_creation',
          title: 'Creating Child Profile',
          story: 'As the System, I need to create and maintain a comprehensive child profile that serves as the central hub for all child-related data.',
          steps: [
            { stage: 'Trigger', action: 'Parent submits enrollment application OR Admin manually creates profile', system: 'Initiate profile creation workflow' },
            { stage: 'Basic Info', action: 'Capture name, DOB, gender, photo', system: 'Create unique child ID, validate age for program eligibility' },
            { stage: 'Guardian Link', action: 'Associate with parent/guardian account(s)', system: 'Create bidirectional relationship for access control' },
            { stage: 'Health Data', action: 'Store immunization records, allergies, medications, medical conditions', system: 'Flag critical health information for teacher access' },
            { stage: 'Emergency', action: 'Link emergency contacts with priority order', system: 'Ensure quick access for staff' },
            { stage: 'Program', action: 'Assign to program and classroom', system: 'Update capacity, notify teacher' },
            { stage: 'Milestones', action: 'Initialize CDC milestone tracking based on age', system: 'Generate age-appropriate milestone checklist' },
            { stage: 'Permissions', action: 'Configure what teachers and parents can view/edit', system: 'Apply role-based access control' },
            { stage: 'Activate', action: 'Set profile status to Active', system: 'Make profile accessible to authorized users' }
          ],
          touchpoints: ['Enrollment System', 'Child Profile Module', 'Health Records', 'Guardian Management', 'Milestone Framework']
        },
        {
          id: 'daily_data_aggregation',
          title: 'Daily Data Collection & Summary',
          story: 'As the System, I need to continuously collect and aggregate data throughout the day to generate meaningful insights for parents and teachers.',
          steps: [
            { stage: 'Check-In', action: 'Record arrival time and check-in method', system: 'Update attendance, trigger daily log initialization' },
            { stage: 'Activities', action: 'Teachers log activities throughout day (circle time, outdoor play, art)', system: 'Timestamp each activity, link to child profile' },
            { stage: 'Meals', action: 'Record meal times, food consumed, appetite notes', system: 'Store nutritional data, flag appetite changes' },
            { stage: 'Naps', action: 'Log nap start/end times, sleep quality', system: 'Calculate total sleep duration, identify patterns' },
            { stage: 'Milestones', action: 'Capture milestone achievements as they occur', system: 'Link to CDC framework, trigger AI analysis' },
            { stage: 'Mood', action: 'Teachers note mood/behavior observations', system: 'Tag emotional states, detect anomalies' },
            { stage: 'Incidents', action: 'Record any health/safety incidents', system: 'Flag for immediate parent notification' },
            { stage: 'Media', action: 'Collect photos/videos from activities', system: 'Associate media with activities and time' },
            { stage: 'AI Processing', action: 'At end of day, AI compiles all data', system: 'Generate draft daily summary with natural language' },
            { stage: 'Teacher Review', action: 'Teacher reviews and approves AI summary', system: 'Allow edits, add personal observations' },
            { stage: 'Delivery', action: 'Send summary to parent via app + email', system: 'Deliver formatted report with all media and insights' },
            { stage: 'Check-Out', action: 'Record departure time', system: 'Complete daily cycle, archive day\'s data' }
          ],
          touchpoints: ['Attendance System', 'Activity Logs', 'Meal Tracking', 'Sleep Tracking', 'Milestone Module', 'Incident Reports', 'Media Storage', 'AI Summary Engine', 'Parent Portal']
        },
        {
          id: 'developmental_tracking',
          title: 'Longitudinal Developmental Tracking',
          story: 'As the System, I need to continuously analyze developmental data over time to identify trends and provide actionable insights.',
          steps: [
            { stage: 'Data Collection', action: 'Aggregate milestone achievements over weeks/months', system: 'Build developmental timeline per child' },
            { stage: 'CDC Comparison', action: 'Compare progress against CDC standards for age', system: 'Calculate developmental quotient by category' },
            { stage: 'Peer Benchmarking', action: 'Anonymously compare with age peers in center', system: 'Generate percentile rankings' },
            { stage: 'Pattern Detection', action: 'AI identifies trends (acceleration, delays, strengths)', system: 'Flag areas needing attention or celebration' },
            { stage: 'Gap Analysis', action: 'Detect missing milestones for age group', system: 'Alert teachers to potential focus areas' },
            { stage: 'Activity Linking', action: 'Correlate activities with milestone achievements', system: 'Identify which activities drive progress' },
            { stage: 'Recommendations', action: 'AI suggests targeted activities for development', system: 'Generate personalized activity plans' },
            { stage: 'Reporting', action: 'Compile into monthly/quarterly progress reports', system: 'Create parent-friendly visualizations' },
            { stage: 'Teacher Insights', action: 'Provide teachers with class-level developmental analytics', system: 'Show distribution of progress across students' },
            { stage: 'Alerting', action: 'Flag significant delays for admin/teacher review', system: 'Trigger intervention workflow if needed' }
          ],
          touchpoints: ['Milestone Database', 'CDC Framework', 'AI Analytics Engine', 'Progress Reports', 'Teacher Dashboard', 'Parent Portal']
        },
        {
          id: 'health_safety_monitoring',
          title: 'Health & Safety Record Maintenance',
          story: 'As the System, I need to maintain accurate health records and surface critical information to protect child wellbeing.',
          steps: [
            { stage: 'Initialization', action: 'Store initial health data from enrollment', system: 'Create health profile with allergies, conditions, immunizations' },
            { stage: 'Visibility', action: 'Make critical health info visible to teachers', system: 'Display allergy alerts on child card, classroom roster' },
            { stage: 'Updates', action: 'Parent or admin updates health records', system: 'Version control changes, notify relevant staff' },
            { stage: 'Immunization Tracking', action: 'Monitor immunization schedules and expiration dates', system: 'Alert parents and admin when updates needed' },
            { stage: 'Incident Logging', action: 'Record injuries, illnesses, behavioral incidents', system: 'Timestamp and link to child profile' },
            { stage: 'Medication', action: 'Track medication administration if applicable', system: 'Log time, dosage, administrator' },
            { stage: 'Pattern Analysis', action: 'AI detects health patterns (frequent stomach issues, recurring injuries)', system: 'Alert teachers and suggest parent consultation' },
            { stage: 'Emergency Access', action: 'Provide quick access to emergency contacts and medical info', system: 'One-tap access for staff during crises' },
            { stage: 'Compliance', action: 'Ensure records meet regulatory requirements', system: 'Flag missing or expired documentation' },
            { stage: 'Privacy', action: 'Restrict health data access by role', system: 'Enforce HIPAA-like protections' }
          ],
          touchpoints: ['Health Records Module', 'Immunization Tracker', 'Incident Reports', 'Emergency Contacts', 'Teacher Dashboard', 'Compliance System']
        }
      ]
    }
  ];

  const toggleRole = (roleId: string) => {
    setExpandedRole(expandedRole === roleId ? null : roleId);
    setExpandedFlow(null);
  };

  const toggleFlow = (flowId: string) => {
    setExpandedFlow(expandedFlow === flowId ? null : flowId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-3">Zornicare User Flows & Stories</h1>
          <p className="text-slate-600 text-lg">Comprehensive journey mapping for all user roles based on the Product Requirements Document</p>
        </div>

        <div className="space-y-4">
          {roles.map((role) => {
            const Icon = role.icon;
            const isRoleExpanded = expandedRole === role.id;
            
            return (
              <div key={role.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleRole(role.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`${role.color} p-3 rounded-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h2 className="text-2xl font-bold text-slate-800">{role.name}</h2>
                      <p className="text-slate-600">{role.flows.length} user flows</p>
                    </div>
                  </div>
                  {isRoleExpanded ? <ChevronDown className="w-6 h-6 text-slate-400" /> : <ChevronRight className="w-6 h-6 text-slate-400" />}
                </button>

                {isRoleExpanded && (
                  <div className="border-t border-slate-200">
                    {role.flows.map((flow, flowIndex) => {
                      const isFlowExpanded = expandedFlow === flow.id;
                      
                      return (
                        <div key={flow.id} className={flowIndex !== 0 ? "border-t border-slate-100" : ""}>
                          <button
                            onClick={() => toggleFlow(flow.id)}
                            className="w-full p-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                          >
                            <div className="text-left flex-1">
                              <h3 className="text-xl font-semibold text-slate-800 mb-2">{flow.title}</h3>
                              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
                                <p className="text-sm text-slate-700 italic">{flow.story}</p>
                              </div>
                            </div>
                            {isFlowExpanded ? <ChevronDown className="w-5 h-5 text-slate-400 ml-4" /> : <ChevronRight className="w-5 h-5 text-slate-400 ml-4" />}
                          </button>

                          {isFlowExpanded && (
                            <div className="px-5 pb-5">
                              <div className="bg-slate-50 rounded-lg p-5">
                                <div className="mb-4">
                                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Touchpoints</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {flow.touchpoints.map((touchpoint, idx) => (
                                      <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-slate-700 border border-slate-200">
                                        {touchpoint}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">User Flow Steps</h4>
                                <div className="space-y-3">
                                  {flow.steps.map((step, stepIndex) => (
                                    <div key={stepIndex} className="bg-white rounded-lg p-4 border-l-4 border-slate-300">
                                      <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0">
                                          <div className="w-8 h-8 bg-slate-700 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                            {stepIndex + 1}
                                          </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className="flex items-center gap-2 mb-2">
                                            <span className="bg-slate-700 text-white px-2 py-1 rounded text-xs font-semibold uppercase">
                                              {step.stage}
                                            </span>
                                          </div>
                                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <div>
                                              <p className="text-xs font-semibold text-slate-500 mb-1">User Action</p>
                                              <p className="text-sm text-slate-800">{step.action}</p>
                                            </div>
                                            <div>
                                              <p className="text-xs font-semibold text-slate-500 mb-1">System Response</p>
                                              <p className="text-sm text-slate-600">{step.system}</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Documentation Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-3xl font-bold mb-2">{roles.length}</div>
              <div className="text-sm opacity-90">User Roles</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-3xl font-bold mb-2">{roles.reduce((sum, role) => sum + role.flows.length, 0)}</div>
              <div className="text-sm opacity-90">User Flows</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-3xl font-bold mb-2">{roles.reduce((sum, role) => role.flows.reduce((flowSum, flow) => flowSum + flow.steps.length, sum), 0)}</div>
              <div className="text-sm opacity-90">Total Steps Mapped</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFlows;