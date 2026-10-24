# Response revision
**Type:** Behavior  
**Referenced in:** 7 papers  
**Also known as:** Conditional weak-to-strong correction, Refinement capability, Token-level editing  

## State of the Field

**Space of definitions.** Most commonly, papers treat response revision as changing an initial, low-quality, weak, incorrect, or unclear answer into a better one. The prevailing description is an edit process, adding, deleting, or substituting tokens, usually guided by a reference, instruction, critique, or feedback; some papers narrow success to factual correction or removal of false information, while others treat success as a stronger, more preferred output or a conversational shift to a correct answer. A smaller line of work frames the same behavior as a refinement capability, correcting an instruction-following failure with minimal irrelevant revisions. In one simulated-society setting, a paper claims a causal relationship from Feedback generation to response revision, describing ratings and explanations as informing the revisions.

**Variants.** Variants span several settings. Papers describe token-level editing, conditional weak-to-strong correction, multi-turn conversational revision where an answer shifts from incorrect or unclear to correct, and factuality-focused revision that corrects or removes false information, sometimes replacing it with common-knowledge facts. Other work studies iterative revision, either as step-by-step revised responses after peer ratings and explanations or as revising an initial answer before submitting a final response.

**Space of elicitation and scores.** No measurement instrument is linked to it. Papers instead elicit or score the behavior by asking for revisions against a ground-truth demonstration or pseudo reference, by using peer ratings and detailed explanations to prompt revisions, by prompting revision from a factuality critique, and, in one definition, by identifying insertions, deletions, and substitutions through Levenshtein distance analysis.

**What it is taken as evidence of.** No construct is linked to it. One definition casts the behavior as a refinement capability, but papers otherwise use response revision as an observable behavior rather than relating it to a specific construct.

## Sources

**[Beyond Imitation: Leveraging Fine-grained Quality Signals for Alignment](https://proceedings.iclr.cc/paper_files/paper/2024/file/5c8236f62e33b5224634069e64cb271a-Paper-Conference.pdf)**
> The observable process of modifying a low-quality model response into a high-quality one by adding, deleting, or substituting tokens, guided by a reference or instruction.

**[MetaAligner: Towards Generalizable Multi-Objective Alignment of Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3d03800841fa1bb2f43ef1750aafcce4-Paper-Conference.pdf) (as "Conditional weak-to-strong correction")**
> The observable process of taking a 'weak' (less preferred) model output as input and generating a 'strong' (more preferred) output that is better aligned with specified objectives.

**[SPaR: Self-Play with Tree-Search Refinement to Improve Instruction-Following in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/abe1eb21ceb046209c96a0f5e7544ccc-Paper-Conference.pdf) (as "Refinement capability")**
> The latent ability of a model to correct or improve a response that fails to follow an instruction, ideally with minimal irrelevant revisions.

**[Beyond Imitation: Leveraging Fine-grained Quality Signals for Alignment](https://proceedings.iclr.cc/paper_files/paper/2024/file/5c8236f62e33b5224634069e64cb271a-Paper-Conference.pdf) (as "Token-level editing")**
> The observable behavior of inserting, deleting, or substituting specific tokens in a response to improve its quality, as identified by Levenshtein distance analysis.

## Relationships

### → Response revision
- **Feedback generation** (behaviors tasks) — *causes*
  > “This feedback, comprising ratings and detailed explanations, informs the central agent’s revisions to its initial response.”
  - [Training Socially Aligned Language Models on Simulated Social Interactions](https://proceedings.iclr.cc/paper_files/paper/2024/file/d763b4a2dde0ae7b77498516ce9f439e-Paper-Conference.pdf)
