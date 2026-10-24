# AI2-THOR
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

**What it is.** Across the surveyed work, AI2-THOR is most commonly described as a simulation environment or interactive 3D simulator for embodied AI in realistic or photorealistic home-like indoor scenes. Definitions emphasize household tasks with natural language instructions and egocentric visual observations, where agents navigate and interact with household items; a smaller line of work presents it as the base environment for multi-agent setups and for benchmarks built on top of it, including MAP-THOR.

**What it is claimed to measure.** Papers use AI2-THOR to measure one construct, Planning, and one behavioral indicator, Causal inference. These claims are concentrated on that small set of targets: one paper reports "planning results" and "N-step causal inference accuracies" across environments and step lengths using AI2-THOR.

**Space of uses.** Papers position AI2-THOR as an evaluation environment for embodied agents. In the snippets, it is used for evaluations across multiple scenarios, including alongside LEGENT, and as the underlying simulator for open-ended, long-horizon home-like tasks in a multi-agent setup.

## Sources

**[MLLM as Retriever: Interactively Learning Multimodal Retrieval for Embodied Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/4e447acb68f57e29234bc0eb19896f11-Paper-Conference.pdf)**
> A simulation environment for embodied AI that supports household tasks with natural language instructions and egocentric visual observations in realistic 3D indoor scenes.

## Relationships

### → AI2-THOR
- **Causal inference** (behaviors tasks) — *measured_by*
  > We evaluate our framework using two distinct environments: a dynamic 8 × 8 GridWorld and a static 3D-rendered kitchen (AI2-THOR)... Our experiments focus on three key aspects: the effectiveness of text-based action representations, causal inference, and planning.
  - [Language Agents Meet Causality -- Bridging LLMs and Causal World Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5c5bc3553815adb4d1a8a5b8701e41a9-Paper-Conference.pdf)
- **Planning** (constructs) — *measured_by*
  > We evaluate our framework using two distinct environments: a dynamic 8 × 8 GridWorld and a static 3D-rendered kitchen (AI2-THOR)... Our experiments focus on three key aspects: the effectiveness of text-based action representations, causal inference, and planning.
  - [Language Agents Meet Causality -- Bridging LLMs and Causal World Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5c5bc3553815adb4d1a8a5b8701e41a9-Paper-Conference.pdf)
