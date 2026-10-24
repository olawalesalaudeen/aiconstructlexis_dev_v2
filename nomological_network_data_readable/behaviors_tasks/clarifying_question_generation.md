# Clarifying question generation
**Type:** Behavior  
**Referenced in:** 12 papers  
**Also known as:** Asking clarifying questions, Clarification question asking, Clarification seeking, Clarification question generation  

## State of the Field

**Space of definitions.** Across definitions, the prevailing usage is a model producing a clarifying or follow-up question in response to an ambiguous or underspecified user request, rather than immediately answering. Most descriptions say the question should resolve ambiguity, elicit more information, or obtain missing task specifications, and one line of work further frames the goal as generating the most informative question among multiple compatible solutions. Some papers make the success condition more specific, requiring the question to identify competing interpretations, request missing or incorrect details, or distinguish among possible solutions before continuing with tool use.

**Variants.** Papers use nearby labels such as asking clarifying questions, clarification question asking, and clarification seeking. The behavior is studied in conversational settings, active task disambiguation, agent and tool-use settings, tabular data analysis, and database-grounded text-to-SQL over schemas. In these variants, the follow-up may ask about ambiguous terms, missing function arguments, potentially incorrect instructions, or competing database interpretations, and some agent settings frame it as seeking user confirmation before actions such as file deletion.

**Space of elicitation and scores.** No measurement instrument is linked to it. Papers instead describe it at the response level: the assistant asks a clarifying question rather than attempting a direct answer, or asks before continuing with tool use when instructions are ambiguous, under-specified, missing details, or appear incorrect.

**What it is taken as evidence of.** Papers connect it to three constructs rather than to one agreed construct. It is related to Ambiguity handling, with papers describing clarifying questions as a way to resolve ambiguity in user requests, and it is related to Disambiguation ability, where asking clarifying questions appears as one disambiguation policy. One paper also claims a causal relationship from Metacognition to Clarifying question generation, stating that generating effective clarifying questions requires a form of meta-cognitive reasoning.

## Sources

**[Modeling Future Conversation Turns to Teach LLMs to Ask Clarifying Questions](https://proceedings.iclr.cc/paper_files/paper/2025/file/97e2df4bb8b2f1913657344a693166a2-Paper-Conference.pdf) (as "Asking clarifying questions")**
> The act of generating a question in response to a user's query to resolve ambiguity and elicit more information.

**[Learning to Clarify: Multi-turn Conversations with Action-Based Contrastive Self-Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/4ffd05ca3cf3985f4572af015b4cfc1e-Paper-Conference.pdf) (as "Clarification question asking")**
> Producing a clarifying question instead of directly answering when the user request is ambiguous or underspecified.

**[Active Task Disambiguation with LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/5e07476b6bd2497e1fbd11b8f0b2de3c-Paper-Conference.pdf)**
> Producing questions intended to elicit missing task specifications that distinguish among multiple compatible solutions.

**[Identifying the Risks of LM Agents with an LM-Emulated Sandbox](https://proceedings.iclr.cc/paper_files/paper/2024/file/7274ed909a312d4d869cc328ad1c5f04-Paper-Conference.pdf) (as "Clarification seeking")**
> The observable behavior of an LM agent requesting additional information from the user when instructions are ambiguous or underspecified.

**[PRACTIQ: A Practical Conversational Text-to-SQL dataset with Ambiguous and Unanswerable Queries](https://aclanthology.org/2025.naacl-long.13.pdf) (as "Clarification question generation")**
> Producing a follow-up question that identifies and disambiguates multiple possible interpretations of a user query in the context of a database schema.

## Relationships

### Clarifying question generation →
- **APPS** (measurements) — *measured_by*
  > We evaluate all question-generating strategies on... the more challenging APPS (Hendrycks et al., 2021) benchmark with competition-level coding challenges
  - [Active Task Disambiguation with LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/5e07476b6bd2497e1fbd11b8f0b2de3c-Paper-Conference.pdf)

### → Clarifying question generation
- **Metacognition** (constructs) — *causes*
  > Yet, generating effective clarifying questions requires LLM agents to engage in a form of meta-cognitive reasoning, an ability LLMs may presently lack.
  - [Active Task Disambiguation with LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/5e07476b6bd2497e1fbd11b8f0b2de3c-Paper-Conference.pdf)

### Associated with
- **Ambiguity handling** (constructs)
  > In this work, we develop LLMs that can ask clarifying questions to resolve ambiguity in their users’ requests. (Section 1)
  - [Modeling Future Conversation Turns to Teach LLMs to Ask Clarifying Questions](https://proceedings.iclr.cc/paper_files/paper/2025/file/97e2df4bb8b2f1913657344a693166a2-Paper-Conference.pdf)
- **Disambiguation ability** (constructs)
  > we argue existing disambiguation works fall in three major policies... Query Rewriting, Middle. Long Form Answer Generation, Right. Asking Clarifying Questions. (Section 3, Figure 2)
  - [Disambiguation in Conversational Question Answering in the Era of LLMs and Agents: A Survey](https://aclanthology.org/2025.emnlp-main.482.pdf)
