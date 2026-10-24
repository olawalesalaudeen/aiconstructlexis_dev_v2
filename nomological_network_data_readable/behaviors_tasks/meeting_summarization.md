# Meeting summarization
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Meeting summary generation  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage is a task of condensing free-form meeting discussions or meeting transcripts into concise summaries. Definitions usually allow outputs ranging from high-level overviews to structured minutes or action items, and one formulation describes summaries as well-structured, concise sentences that capture key insights. Some work narrows the task to summarizing particular aspects of a transcript in response to questions, while a smaller privacy-focused formulation asks for a summary sent to all attendees that retains public information and excludes confidential discussion.

**Variants.** Papers study several variants under the names meeting summarization and meeting summary generation. The clearest split is between brief summarization and detailed summarization, with the latter highlighting key insights and local details; other formulations use high-level summaries, structured meeting minutes, or action-item style outputs. A question-focused setting asks models to summarize what the group discussed about a prompted topic, and another setting centers on attendee-facing summaries with confidentiality constraints.

**Space of elicitation and scores.** Papers link meeting summarization to 2 measurement instruments: Human evaluation and TofuEval. Human evaluation is used to assess how well summaries capture decision-making content from the meeting, while TofuEval is described as a framework specifically developed for meeting and dialogue summarization.

**What it is taken as evidence of.** Papers do not link meeting summarization to any construct, so they do not specify what broader construct this behavior is taken to reflect.

## Sources

**[Summarizing Speech: A Comprehensive Survey](https://aclanthology.org/2025.emnlp-main.1388.pdf)**
> The task of condensing free-form spoken discussions from meetings into concise overviews, structured minutes, or lists of action items.

**[Can LLMs Keep a Secret? Testing  Privacy  Implications of Language Models  via Contextual Integrity Theory](https://proceedings.iclr.cc/paper_files/paper/2024/file/08305d8b2ddab98932c163ea73df065f-Paper-Conference.pdf) (as "Meeting summary generation")**
> Generating a meeting summary for all attendees while excluding confidential information and retaining public information.

## Relationships

### Meeting summarization →
- **TofuEval** (measurements) — *measured_by*
  > Among these, CREAM (Gong et al., 2024), MESA (Kirstein et al., 2025b), and TofuEval (Tang et al., 2024) stand out as one of the few frameworks specifically developed for meeting and dialogue summarization... (Section 5.2).
  - [Summarizing Speech: A Comprehensive Survey](https://aclanthology.org/2025.emnlp-main.1388.pdf)
