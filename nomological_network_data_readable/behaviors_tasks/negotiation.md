# Negotiation
**Type:** Behavior  
**Referenced in:** 9 papers  
**Also known as:** Multi-agent negotiation, Negotiation dialogue  

## State of the Field

**Space of definitions.** Across papers, the prevailing framing is a goal-oriented, multi-turn dialogue in which parties with competing interests exchange proposals to reach a mutually acceptable agreement on one or more issues. A narrower formulation treats it as dividing items or resources with an opponent through dialogue and proposal exchange, as in the prompt, "You are negotiating the division of Peppers, Strawberries, and Cherries" (GTBench: Uncovering the Strategic Reasoning Capabilities of LLMs via Game-Theoretic Evaluations).

**Variants.** Papers study it under names such as multi-agent negotiation and negotiation dialogue. Recurring variants are multi-turn, multi-issue settings, including human negotiation dialogues, buyer-seller conversations, and item-division games, and one paper also places negotiation among proactive dialogue applications.

**Space of elicitation and scores.** No measurement instrument is linked to negotiation. Instead, papers operationalize it through the dialogue setup itself, emphasizing multi-turn interaction, proposal exchange, and whether parties reach a mutually acceptable agreement or a final successful deal.

**What it is taken as evidence of.** Negotiation is linked to one construct, Planning, but the recorded link does not treat negotiation as evidence of planning. Rather, one paper claims a causal relationship from Planning to Negotiation, saying that planning helped reach a final successful deal and that without it agents' suggestions may "saturate and no longer increase the collective score" (Cooperation, Competition, and Maliciousness: LLM-Stakeholders Interactive Negotiation).

## Sources

**[GTBench: Uncovering the Strategic Reasoning Capabilities of LLMs via Game-Theoretic Evaluations](https://proceedings.neurips.cc/paper_files/paper/2024/file/3191170938b6102e5c203b036b7c16dd-Paper-Conference.pdf)**
> Engaging in dialogue and proposal exchanges to divide items or resources with an opponent.

**[Cooperation, Competition, and Maliciousness: LLM-Stakeholders Interactive Negotiation](https://proceedings.neurips.cc/paper_files/paper/2024/file/984dd3db213db2d1454a163b65b84d08-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Multi-agent negotiation")**
> Engaging in a multi-turn, interactive dialogue with other agents to reach a mutually acceptable agreement on multiple issues.

**[Plug-and-Play Policy Planner for Large Language Model Powered Dialogue Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/29e8437db7b549160ce03d336ff66f65-Paper-Conference.pdf) (as "Negotiation dialogue")**
> A goal-oriented conversation task where two or more parties with competing interests, such as a buyer and a seller, attempt to reach a mutually acceptable agreement.

## Relationships

### → Negotiation
- **Planning** (constructs) — *causes*
  > Planning. This step was important to reach a ﬁnal successful deal (row 4); without it, agents’ suggestions may saturate and no longer increase the collective score (Figure 3b). (Section 4.2)
  - [Cooperation, Competition, and Maliciousness: LLM-Stakeholders Interactive Negotiation](https://proceedings.neurips.cc/paper_files/paper/2024/file/984dd3db213db2d1454a163b65b84d08-Paper-Datasets_and_Benchmarks_Track.pdf)
